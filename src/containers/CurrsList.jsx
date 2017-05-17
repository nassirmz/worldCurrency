import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { startGetLatestCurrs } from '../actions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.object.isRequired
}

class CurrsList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(startGetLatestCurrs());
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
          <ul>
            {
              Object.keys(currencies).toString()
            }
          </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.currencies
  };
}

CurrsList.propTypes = propTypes

export default connect(mapStateToProps)(CurrsList);
