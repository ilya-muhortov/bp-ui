
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '@blueprintjs/core';

import Navbar from './Navbar';


const LayoutContainer = styled.div`
  display: grid;
  height: 100vh;
  max-width: 1400px;
  margin: auto;
  box-shadow: 0 0 20px ${Colors.DARK_GRAY1};
  position: relative;
  
  ${props => props.fullWidth && css`
    max-width: 100%;
  `};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 86px 1fr;
`;

const Content = styled.div`
  background: ${Colors.LIGHT_GRAY5};
`;


export default class Dashboard extends Component {

  static propTypes = {
    topToolbar: PropTypes.element,
    bottomToolbar: PropTypes.element,
    navbarProps: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      fullWidth: false,
      ...this.loadSettings()
    };
  }

  switchWidth = () => {
    this.setState({
      fullWidth: !this.state.fullWidth
    }, () => {
      this.saveSettings();
    });
  };

  saveSettings = () => {
    try {
      localStorage.setItem(`dashboard`, JSON.stringify({
        fullWidth: this.state.fullWidth
      }));
    }
    catch (e) {}
  };

  loadSettings = () => {
    let value = localStorage.getItem('dashboard');
    if (value) {
      try {
        return JSON.parse(value);
      }
      catch (e) {}
    }
    return {};
  };

  render() {
    const { fullWidth } = this.state;
    const { topToolbar, bottomToolbar, navbarProps } = this.props;
    return (
      <LayoutContainer
        fullWidth={fullWidth}
        id={'dashboard-container'}
      >
        <Container>
          <Navbar
            topToolbar={topToolbar}
            bottomToolbar={bottomToolbar}
            fullWidth={fullWidth}
            switchWidth={this.switchWidth}
            navbarProps={navbarProps}
          />
          <Content>
            {this.props.children}
          </Content>
        </Container>
      </LayoutContainer>
    );
  }
}
