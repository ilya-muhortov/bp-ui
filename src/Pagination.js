
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Button,
  NumericInput
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';


const Paginator = styled.div`
    display: grid;
    grid-template-columns: 30px 30px 60px 30px 30px;
    gap: 20px;
    align-items: center;
    justify-content: center;
    
    .bp3-numeric-input{
      display: inline; 
      input {
        text-align: center;
      }
    }
`;


export default class Pagination extends Component {

  constructor(props){
    super(props);

    this.state = {
      page: null
    };

    this.onPageNumberChange = this.onPageNumberChange.bind(this);

    this.debouncedPageNumber = debounce(
      () => this.props.onChangePageNumber(this.state.page),
      500
    );
  }

  componentDidUpdate = () => {
    if (this.props.pagination && !this.state.page)
      this.setState({page: this.props.pagination.page});
  };

  componentWillReceiveProps(nextProps, nextContext) {
    const { pagination, disabled } = nextProps;
    if (!disabled && pagination) {
      this.setState({
        page: pagination.page
      })
    }
  }

  onPageNumberChange(value) {
    const { pagination } = this.props;
    const oldValue = this.state.page;
    if (value < 1) {
      value = 1;
    }
    else if (value > pagination.total_pages) {
      value = pagination.total_pages;
    }

    if (oldValue !== value) {
      this.setState({
        page: value
      });

      this.debouncedPageNumber();
    }
  }

  setPageNumber = (number) => {
    this.props.onChangePageNumber(number);
  };

  render() {
    const { pagination, disabled } = this.props;
    if (!pagination) {
      return (<React.Fragment/>);
    }

    return(
      <React.Fragment>
      {pagination.total_pages > 1 && this.state.page &&
        <Paginator>
          <Button
            icon={IconNames.DOUBLE_CHEVRON_LEFT}
            onClick={() => this.setPageNumber(1)}
            disabled={pagination.page === 1}
            minimal={true}
          />

          <Button
            icon={IconNames.CHEVRON_LEFT}
            onClick={(e) => this.setPageNumber(pagination.previous)}
            disabled={disabled || !pagination.previous}
            minimal={true}
          />

          <NumericInput
            buttonPosition={false}
            value={this.state.page}
            selectAllOnFocus={true}
            min={1}
            max={pagination.total_pages}
            onValueChange={this.onPageNumberChange}
          />

          <Button
            icon={IconNames.CHEVRON_RIGHT}
            onClick={(e) => this.setPageNumber(pagination.next)}
            disabled={disabled || !pagination.next}
            minimal={true}
          />

          <Button
            icon={IconNames.DOUBLE_CHEVRON_RIGHT}
            onClick={() => this.setPageNumber(pagination.total_pages)}
            disabled={pagination.page === pagination.total_pages}
            minimal={true}
          />
        </Paginator>
      }
      </React.Fragment>
    )
  }
}

Pagination.propTypes = {
  pagination: PropTypes.shape({
    total_pages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    per_page: PropTypes.number.isRequired,
    previous: PropTypes.number,
    next: PropTypes.number,
  }),
  disabled: PropTypes.bool.isRequired,
  onChangePageNumber: PropTypes.func.isRequired,
};
