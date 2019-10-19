
import React, { Component } from 'react';
import {
  Colors,
  Card,
  Elevation
} from '@blueprintjs/core';
import styled, { css } from 'styled-components';

import PanelHeader from './Header'

const StyledPanel = styled(Card)`
  position: relative;
  display: grid;
  padding: 0;
  grid-template-rows: auto auto;
  overflow: hidden;
  border: 1px solid ${Colors.GRAY5};
  box-shadow: none;
`;

const PanelContent = styled.div`
  dl {
    display: grid;
    grid-template-columns: 160px 1fr;
    
    dt {
      text-align: right;
      font-weight: bold;
      padding: 10px;
      border-bottom: 1px solid ${Colors.LIGHT_GRAY3};
      border-right: 1px solid ${Colors.LIGHT_GRAY3};
      white-space: pre-line;
    }
    
    dd {
      padding: 10px;
      border-bottom: 1px solid ${Colors.LIGHT_GRAY3};
      white-space: pre-line;
    }
  }
  
  dl:last-child {
    dt, dd {
      border-bottom: 0;
    }
  }
  
  table {
    width: 100%;
  }
  
  ${props => props.wide && css`
    dl {
      grid-template-columns: 200px 1fr;
    }
  `}
`;

const PanelMenu = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${Colors.GRAY4};
  box-shadow: 0 3px 4px -3px ${Colors.GRAY4};
  z-index: 10;
`;


const PanelFooter = styled.div`
  padding:  10px;
  border-top: 1px solid ${Colors.LIGHT_GRAY1};
  background: ${Colors.LIGHT_GRAY4};
`;


export default class Panel extends Component {

  static Header = PanelHeader;
  static Content = PanelContent;
  static Footer = PanelFooter;
  static Menu = PanelMenu;

  render() {
    return (
      <StyledPanel
        className={this.props.className}
        elevation={Elevation.ONE}
        {...this.props}
      >
        {this.props.children}
      </StyledPanel>
    )
  }
}
