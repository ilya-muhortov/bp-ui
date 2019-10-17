
import styled, { css } from 'styled-components';
import React, { Component } from 'react';
import { Colors, Button } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

const StyledNavbar = styled.div`
  background: ${Colors.DARK_GRAY5};
  color: #fff;
  padding: 10px 0;
  text-align: center;
  
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 1fr auto;
`;

const TopToolbar = styled.div`
  padding: 0 5px;
  
  a.bp3-button {
    margin-bottom: 10px;
  }
`;

const BottomToolbar = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class Navbar extends Component {

  render() {
    const { topToolbar, bottomToolbar, fullWidth, switchWidth, navbarProps } = this.props;
    return (
      <StyledNavbar className={'bp3-dark'} {...navbarProps}>
        <TopToolbar>
          {topToolbar}
        </TopToolbar>
        <BottomToolbar>
          {bottomToolbar}

          <div className={'mt-10'}>
            <Button
              onClick={() => switchWidth()}
              icon={fullWidth ? IconNames.MINIMIZE : IconNames.MAXIMIZE}
              minimal={true}
              large={true}
            />
          </div>
        </BottomToolbar>
      </StyledNavbar>
    );
  }
}
