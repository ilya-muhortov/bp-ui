
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Colors, H4 } from '@blueprintjs/core';
import styled, { css } from 'styled-components';


export const StyledHeader = styled.div`
  display: grid;
  background:  ${Colors.WHITE};
  border-bottom: 2px solid ${Colors.GRAY4};
  box-shadow: 0 4px 5px -4px ${Colors.GRAY4};
  z-index: 10;
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0;
  }
  
  ${props => props.columns && css`
    grid-template-columns: ${props.columns};
  `};
  
  ${props => props.rows && css`
    grid-template-rows: ${props.rows};
  `};
`;

export const StyledHeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 5px 10px;
  min-height: 42px;
  
  .bp3-heading {
    span {
      color: ${Colors.GRAY1};
    }
    
    small {
      font-size: 60%;
      color: ${Colors.GRAY1};
    }
  }
  
  ${props => props.columns && css`
    grid-template-columns: ${props.columns};
  `};
  
  ${props => props.rows && css`
    grid-template-rows: ${props.rows};
  `};
`;


export const StyledLeftHeaderElement = styled.div`
  justify-self: left;
  align-self: center;
`;


export const StyledRightHeaderElement = styled.div`
  justify-self: right;
  align-self: center;
`;

export class LayoutHeader extends Component {

  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]).isRequired,
    rightElement: PropTypes.element
  };

  render() {
    const { title, rightElement } = this.props;
    return (
      <StyledHeader>
        <StyledHeaderContent>
          <StyledLeftHeaderElement>
            <H4>{title}</H4>
          </StyledLeftHeaderElement>
          <StyledRightHeaderElement>
            {rightElement}
          </StyledRightHeaderElement>
        </StyledHeaderContent>
        {this.props.children}
      </StyledHeader>
    )
  }
}
