import * as activityApi from '../../services/activityApi';
import useAsync from '../useAsync';

import useToken from '../useToken';

export default function useActivityData({ activityId }) {
  const token = useToken();

  const {
    data: vacancies,
    loading: vacanciesLoading,
    error: vacanciesError,
    act: getVacancies,
  } = useAsync(() => activityApi.getActivityVacancies({ token, activityId }));

  return {
    vacancies,
    vacanciesLoading,
    vacanciesError,
    getVacancies,
  };
}