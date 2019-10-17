
import React, { Component} from 'react';
import { NonIdealState } from '@blueprintjs/core';
import styled from 'styled-components';

const StyledPage = styled.div`
  display: grid;
  align-self: center;
  height: 100vh;
`;


export default class PageNotFound extends Component {
  render() {
    return (
      <StyledPage>
        <NonIdealState
          title={'Страница не найдена'}
          icon={<span>¯\_(ツ)_/¯</span>}
        />
      </StyledPage>
    )
  }
}
