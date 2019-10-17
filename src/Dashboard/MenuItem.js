
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {
  Colors
} from '@blueprintjs/core';
import styled from 'styled-components';


const StyledMenuItem = styled(NavLink)`
  padding: 8px 0 !important;
  display: flex;
  flex-direction: column;
  position: relative;
  
  svg {
    margin-right: 0 !important;
  }
  
  &.bp3-active{
    background: ${Colors.TURQUOISE1} !important;
  }
`;

const StyledMenuItemName = styled.span`
  margin-top: 5px;
  font-size: 10px;
  color: ${Colors.LIGHT_GRAY1};
  margin-right: 0;
`;

const StyledMenuItemCounter = styled.span`
  position: absolute;
    top: 3px;
    right: 3px;
    font-size: 10px;
    background: ${Colors.RED3};
    color: ${Colors.WHITE};
    padding: 2px 5px;
    border-radius: 2px;
`;


export default class MenuItem extends Component {

  static Name = StyledMenuItemName;
  static Counter = StyledMenuItemCounter;

  render() {
    return (
      <StyledMenuItem
        activeClassName={'bp3-active'}
        className={`bp3-button bp3-minimal bp3-large`}
        {...this.props}
      >
        {this.props.children}
      </StyledMenuItem>
    );
  }
}
