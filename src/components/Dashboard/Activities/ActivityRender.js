import { Box, Container, Paper, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Button from '../../Form/Button';
import useToken from '../../../hooks/useToken';
import { getActivitiesByEventId, postActivityEnrollment } from '../../../services/activityApi';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import Activity from './Activity';
import useEvent from '../../../hooks/api/useEvent.js';
import { toast } from 'react-toastify';
import JoinButton from './JoinButton';

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
});

export default function Activities() {
  const token = useToken();
  const { event } = useEvent();
  const [props, setProps] = useState({});
  const [daysOfEvent, setDaysOfEvent] = useState([]);
  const [activities, setActivities] = useState(null);
  const [auditoriums, setAuditoriums] = useState([]);
  const [dayFilter, setDayFilter] = useState(null);

  useEffect(() => {
    if (!event) return;
    async function loadActivities() {
      const response = await getActivitiesByEventId(event.id, token);
      setActivities(response);
    }
    try {
      loadActivities();
    } catch (e) {
      console.error();
    }
  }, [event]);

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

  function calculateDuration(activity) {
    const startsAt = dayjs(activity.startsAt);
    const endsAt = dayjs(activity.endsAt);

    const duration = endsAt.diff(startsAt, 'minutes');

    return duration;
  }

  function calculateHeight(activity) {
    const duration = calculateDuration(activity);
    const height = (80 * duration) / 60;

    return height;
  }

  async function enrollInActivity(activityId) {
    try {
      await postActivityEnrollment(event.id, activityId, token);
      toast('Você se inscreveu com sucesso!');
    } catch (e) {
      console.log(e);
    }
  }

  return (
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
              <Typography key={`${i}${auditorium}`} color="textSecondary">
                {auditorium}
              </Typography>
              <Box key={i} sx={styles.activityContainer}>
                {activities.map((activity) => {
                  const isActivityFromDayFiltered = formatDayDisplay(activity.startsAt) === dayFilter;
                  if (activity.auditorium.name === auditorium && isActivityFromDayFiltered) {
                    return (
                      <Activity height={calculateHeight(activity)}>
                        <Box sx={styles.description}>
                          <Typography style={styles.activityTitle}>{activity.name}</Typography>
                          <Typography>
                            {dayjs(activity.startsAt).format('HH:mm') + '-' + dayjs(activity.endsAt).format('HH:mm')}
                          </Typography>
                        </Box>
                        <JoinButton activityId={activity.id} activityVacancies={activity?.vacancies} />
                      </Activity>
                    );
                  }
                })}
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    width: '864px',
    mt: 4,
    gap: '10px',
  },
  auditoriumContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '33%',
  },
  activityContainer: {
    minHeight: '50vh',
    padding: '9px 14px 10px 9px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    border: '1px solid #D7D7D7',
  },
  description: {
    display: 'block',
  },
  activityTitle: {
    fontWeight: '700',
  },
};
