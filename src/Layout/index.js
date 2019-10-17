
import React, { Component } from 'react';
import { Colors } from '@blueprintjs/core';
import styled, {css} from 'styled-components';
import { LayoutHeader} from './Header';
import { LayoutMenu } from './Menu';
import { LayoutFooter } from './Footer';
import { StyledContent } from './Content';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  background: ${Colors.LIGHT_GRAY5}; 
`;

const StyledGrid = styled.div`
  display: grid;
  overflow: auto;
  padding: 10px;
  grid-gap: 10px;
  
  ${props => props.columns && css`
    grid-template-columns: ${props.columns};
  `};
  
  ${props => props.rows && css`
    grid-template-rows: ${props.rows};
  `};
`;


export default class Layout extends Component {

  static Header = LayoutHeader;
  static Content = StyledContent;
  static Menu = LayoutMenu;
  static Footer = LayoutFooter;
  static Grid = StyledGrid;

  render() {
    return (
      <StyledLayout
        className={this.props.className}
        {...this.props}
      >
        {this.props.children}
      </StyledLayout>
    )
  }
}
