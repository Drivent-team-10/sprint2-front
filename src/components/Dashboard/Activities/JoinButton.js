import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import useActivityData from "../../../hooks/api/useActivity";
import { Join, SoldOff, Vacancies, VacanciesBox } from "./Activity";

export default function JoinButton({ activityId, activityVacancies }) {
  const { vacancies } = useActivityData({ activityId });

  const [occupation, setOccupation] = useState(0);

  useEffect(() => {
    if (vacancies) {
      setOccupation(vacancies.vacancies - vacancies.occupation)
    }
  }, [vacancies]);

  return (
    <Box  width='35%' height='100%' display='flex' alignItems='center' justifyContent='space-between' >
      <Box width='1px' height='80%' bgcolor='#cfcfcf' marginLeft='10px'  />
      <VacanciesBox>
        {
          occupation || activityVacancies ?
            <>
              <Join />
              <Vacancies occupation={ occupation || activityVacancies }>
                {
                  vacancies?.vacancies ?
                    occupation + ' vagas'
                  : activityVacancies + ' vagas'
                }
              </Vacancies>
            </>
            : 
            <>
              <SoldOff />
              <Vacancies occupation={ occupation } >
                Esgotado
              </Vacancies>
            </>
        }
      </VacanciesBox>
    </Box>
    
  );
}
