import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const StyledHotelTypography = styled(Typography)`
  width: 100%;
  text-align: left;
    
  margin-top: 10px !important;

  span {
    line-height: 0.6rem;
    font-size: 0.8rem;
  }
`;

export const BoxHotel = styled(Box)`
  height: 50%;

  background-color: #f1f1f1;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  box-sizing: border-box;
  padding: 16px;
`;

export const Description = styled(Box)`
  width: 100%;

  text-align: left;

  background-color: #f1f1f1;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;

  p:last-child {
    margin-bottom: 0;
  }
`;