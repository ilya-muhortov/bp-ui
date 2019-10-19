
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Colors, H5, Icon } from '@blueprintjs/core';
import styled, {css} from 'styled-components';

const StyledHeader = styled.div`
  padding:  10px;
  border-bottom: 1px solid ${Colors.GRAY5};
  background: ${Colors.LIGHT_GRAY2};
  display: grid;
  grid-gap: 10px;
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0;
    color: ${Colors.DARK_GRAY1};
  }
  
  .bp3-icon {
    margin-right: 5px;
  }
  
  ${props => props.columns && css`
    grid-template-columns: ${props.columns};
  `};
  
  ${props => props.rows && css`
    grid-template-rows: ${props.rows};
  `};
`;

export default class PanelHeader extends Component {

  static propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string
  };

  render() {
    const { icon, label, children } = this.props;
    if (label) {
      return (
        <StyledHeader {...this.props}>
          <H5>
            {icon && (
              <Icon icon={icon} />
            )}
            {label}
          </H5>
        </StyledHeader>
      )
    }
    else {
      return (<StyledHeader {...this.props}>{children}</StyledHeader>)
    }
  }
}