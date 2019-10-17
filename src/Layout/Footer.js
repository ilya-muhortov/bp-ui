
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '@blueprintjs/core';


export const StyledLayoutFooter = styled.div`
  display: grid;
  background:  ${Colors.LIGHT_GRAY4};
  border-top: 1px solid ${Colors.GRAY4};
  min-height: 41px;
  color: ${Colors.GRAY1};
  padding: 5px 10px;
  align-items: center;
  
  ${props => props.columns && css`
    grid-template-columns: ${props.columns};
  `};
`;


export class LayoutFooter extends Component {
  render() {
    return (
      <StyledLayoutFooter {...this.props}>{this.props.children}</StyledLayoutFooter>
    )
  }
}
