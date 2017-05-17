import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { startGetCurrs } from '../actions';
import RateItem from '../components/RateItem';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  rates: PropTypes.array.isRequired
}

class RatesList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(startGetCurrs());
  }

  render() {
    const { rates } = this.props;
    return (
      <div>
          <table>
            {
              rates.map((rate, index) => {
                return (
                  <RateItem key={index} rate={rate}/>
                )
              })
            }
          </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rates: state.rates
  };
}

RatesList.propTypes = propTypes

export default connect(mapStateToProps)(RatesList);
