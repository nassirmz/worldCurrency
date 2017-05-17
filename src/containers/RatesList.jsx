import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Col } from 'react-bootstrap';

import { startGetCurrs } from '../actions';
import RateItem from '../components/RateItem';
import TableHead from '../components/TableHead';
import BaseCurr from './BaseCurr';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  rates: PropTypes.array.isRequired,
  base: PropTypes.string.isRequired
}

class RatesList extends Component {
  constructor() {
    super();
    this.handleTargetSelectOnBase = this.handleTargetSelectOnBase.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(startGetCurrs());
  }

  handleTargetSelectOnBase(target) {
    const { dispatch} = this.props;
    dispatch(startGetCurrs(target));
  }

  render() {
    const { rates, base } = this.props;
    return (
      <div>
        <BaseCurr base={base} rates={rates} handleTargetSelectOnBase={this.handleTargetSelectOnBase} />
        <Table condensed hover>
          <TableHead />
            <tbody>
              {
                rates.map((rate, index) => {
                  return (
                    <RateItem key={index} rate={rate}/>
                  )
                })
              }
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rates: state.rates,
    base: state.base
  };
}

RatesList.propTypes = propTypes

export default connect(mapStateToProps)(RatesList);
