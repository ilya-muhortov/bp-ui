
import React from 'react';
import styled, { css } from 'styled-components';


export const StyledContent = styled.div`
  display: grid;
  overflow: auto;
  
  ${props => props.columns && css`
    grid-gap: 10px;
    grid-template-columns: ${props.columns};
  `};
  
  ${props => props.rows && css`
    grid-template-rows: ${props.rows};
  `};
`;
