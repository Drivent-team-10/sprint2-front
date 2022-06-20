import { Box } from '@material-ui/core';
import styled from 'styled-components';

import { BiLogIn } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';

const Activity = styled(Box)`
  padding: 10px 12px;
  background: #f1f1f1;
  border-radius: 5px;
  height: ${props => props.height}px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #f1f1f1;
  border-radius: 5px;

  padding: 10px 12px;
  cursor: pointer;
`;
export default Activity;

export const Join = styled(BiLogIn)`
  color: #078632;
  font-size: 30px;
`;

export const SoldOff = styled(MdOutlineCancel)`
  color: #cc6666;
  font-size: 30px;
`;

export const Vacancies = styled.span`
  color: ${(props) => (props.occupation ? '#078632' : '#CC6666')};
  font-weight: 400;
  font-size: 9px;
`;

export const VacanciesBox = styled(Box)`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  align-self: flex-end;
`;
