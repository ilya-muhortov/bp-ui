
import React, { Component } from 'react';

import styled, { css } from 'styled-components';
import { Colors } from '@blueprintjs/core/lib/esm/index';

const ColTag = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${Colors.LIGHT_GRAY2};
  border-left: 1px solid ${Colors.LIGHT_GRAY2} !important;
  overflow: hidden;
  white-space: pre-line;
  word-wrap: break-word;
`;

const RowTag = styled.div`
  display: grid;
  
  &.head {
    font-weight: 600;
    background: ${Colors.LIGHT_GRAY4};
  }
  
  &.filter {
    font-weight: 600;
    background: ${Colors.LIGHT_GRAY5};
  }
  
  &.active {
    background: hsla(60, 65%, 88%, 1);
  }
  
  &.full {
    grid-template-columns: 1fr;
  }
  
  :hover {
    background: ${Colors.LIGHT_GRAY5};
  }
  
  &.active:hover {
    background: ${Colors.LIGHT_GRAY3};
  }
  
  grid-template-columns: ${props => props.empty ? '1fr !important' : ''};
  grid-template-rows: ${props => props.empty ? '1fr !important' : ''} ;
  height: ${props => props.empty ? '100% !important' : ''};
`;

const BodyTag = styled.div`
  overflow-y: scroll;
  overflow-x: auto;
  contain: size;
`;

const HeadTag = styled.div`
  border-bottom: 1px solid ${Colors.GRAY4};
  background: ${Colors.LIGHT_GRAY4};
  border-right: 10px solid ${Colors.LIGHT_GRAY1};
  ${ColTag} {
    overflow: unset;
  }
`;

const TableTag = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE};
  
  ${props => props.rows ? css`grid-template-rows: ${props.rows}` : css`grid-template-rows: auto 1fr;` }
  
  ${RowTag}, ${HeadTag} { 
    grid-template-columns: ${props => props.columns || "1fr"};
  }
  
  ${ColTag} {
    border-left: '1px solid ${Colors.LIGHT_GRAY2}';
  }
  
  ${HeadTag} ${RowTag} {
    :hover {
      background: inherit;
    }
  }
  
  ${props => props.interactive && css`
    ${BodyTag} ${RowTag} {
      &:hover {
        cursor: pointer;
      }
    }
  `}
`;


export default class Table extends Component {
  static Row = RowTag;
  static Body = BodyTag;
  static Head = HeadTag;
  static Col = ColTag;

  render() {
    return (
      <TableTag
        className={this.props.className}
        {...this.props}
      >
        {this.props.children}
      </TableTag>
    )
  }
}