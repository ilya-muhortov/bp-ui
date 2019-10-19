
import React, {Component} from 'react';
import {
  Colors
} from '@blueprintjs/core';
import styled from 'styled-components';


export const StyledNavbarMenuItem = styled.span`
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

export const StyledNavbarMenuItemName = styled.span`
  margin-top: 5px;
  font-size: 10px;
  color: ${Colors.LIGHT_GRAY1};
  margin-right: 0;
`;

export const StyledNavbarMenuItemCounter = styled.span`
  position: absolute;
    top: 3px;
    right: 3px;
    font-size: 10px;
    background: ${Colors.RED3};
    color: ${Colors.WHITE};
    padding: 2px 5px;
    border-radius: 2px;
`;


export default class NavbarMenuItem extends Component {

  static Item = StyledNavbarMenuItem;
  static Name = StyledNavbarMenuItemName;
  static Counter = StyledNavbarMenuItemCounter;

  render() {
    return (
      <StyledNavbarMenuItem
        activeClassName={'bp3-active'}
        className={`bp3-button bp3-minimal bp3-large`}
        {...this.props}
      >
        {this.props.children}
      </StyledNavbarMenuItem>
    );
  }
}
