
import React, { Component } from 'react';
import { Colors } from '@blueprintjs/core';
import styled, { css } from 'styled-components';


export const StyledLayoutMenu = styled.div`
  border-top: 1px solid ${Colors.LIGHT_GRAY1};
  background: ${Colors.WHITE};
  padding: 5px 10px;
  
  ${props => props.columns && css`
    display: grid;
    grid-template-columns: ${props.columns};
  `};
  
  ${props => props.rows && css`
    display: grid;
    grid-template-rows: ${props.rows};
  `};
  
  .bp3-button {
    margin-right: 5px;
    background: ${Colors.LIGHT_GRAY5};
    
    svg {
      margin-right: 5px;
    }
  }
  
`;

export class LayoutMenu extends Component {

  render() {
    return (
      <StyledLayoutMenu>
        {this.props.children}
      </StyledLayoutMenu>
    )
  }
}
