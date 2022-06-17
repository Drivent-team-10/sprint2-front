import { Box, Container, Paper, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Button from '../../Form/Button';
import useToken from '../../../hooks/useToken';
import { getActivitiesByEventId } from '../../../services/activityApi';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import Activity from './Activity';

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
});

export default function Activities() {
  const token = useToken();
  const [props, setProps] = useState({});
  const [daysOfEvent, setDaysOfEvent] = useState([]);
  const [activities, setActivities] = useState(null);
  const [auditoriums, setAuditoriums] = useState([]);
  const [dayFilter, setDayFilter] = useState(null);

  useEffect(() => {
    async function loadActivities() {
      const response = await getActivitiesByEventId(1, token);
      setActivities(response);
    }
    try {
      loadActivities();
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (!activities) return;
    const result = [];

    for (let activity of activities) {
      if (result.includes(activity.auditorium.name)) continue;
      result.push(activity.auditorium.name);
    }
    setAuditoriums(result);
    setDaysOfEvent(filterDaysOfEvent());
  }, [activities]);

  function handleSelection(i, day) {
    if (day === dayFilter) setDayFilter(null);
    if (props[i]) return setProps({});
    const selectionConfig = { backgroundColor: '#FFD37D' };
    setProps({ [i]: selectionConfig });

    setDayFilter(day);
  }

  if (!activities || !auditoriums) {
    return 'Carregando...';
  }

  function filterDaysOfEvent() {
    const result = [];

    for (let activity of activities) {
      const day = formatDayDisplay(activity.startsAt);

      if (!result.includes(day)) result.push(day);
    }
    return result;
  }

  function formatDayDisplay(datetime) {
    return dayjs(datetime).format('dddd, DD/MM');
  }

  return (
    <Box>
      <Typography variant="h4">Escolha de atividades</Typography>
      <Box sx={{ margin: '36px 0 0 0' }}>
        {Object.keys(props).length === 0 && (
          <Typography variant="h6" color="textSecondary">
            Primeiro, filtre pelo dia do evento:
          </Typography>
        )}
        <Box sx={styles.container}>
          {daysOfEvent.map((day, i) => (
            <Button key={`${i}${day}`} sx={props[i]} onClick={(e) => handleSelection(i, day)}>
              {day}
            </Button>
          ))}
        </Box>
        {dayFilter && (
          <Box sx={styles.container}>
            {auditoriums.map((auditorium, i) => (
              <Box sx={styles.auditoriumContainer}>
                <Typography key={`${i}${auditorium}`}> {auditorium} </Typography>
                <Container key={i} sx={styles.activityContainer}>
                  {activities.map((activity) => {
                    const isActivityFromDayFiltered = formatDayDisplay(activity.startsAt) === dayFilter;
                    if (activity.auditorium.name === auditorium && isActivityFromDayFiltered) {
                      return <Activity> {activity.name} </Activity>;
                    }
                  })}
                </Container>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

const styles = {
  container: { display: 'flex', width: '100%' },
  auditoriumContainer: { display: 'flex', flexDirection: 'column', border: '1px solid #D7D7D7' },
  activityContainer: { display: 'flex', flexDirection: 'column' },
};
