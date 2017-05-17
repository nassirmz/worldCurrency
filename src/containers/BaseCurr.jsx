import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SplitButton, MenuItem } from 'react-bootstrap';

const propTypes = {
  base: PropTypes.string.isRequired,
  rates: PropTypes.array.isRequired,
  handleTargetSelectOnBase: PropTypes.func.isRequired
};

class BaseCurr extends Component {
  constructor() {
    super();
    this.handleTargetSelect = this.handleTargetSelect.bind(this);
  }
  handleTargetSelect(target) {
    const { handleTargetSelectOnBase } = this.props;
    handleTargetSelectOnBase(target);
  }

  render() {
    const { base, rates } = this.props;
    return (
      <SplitButton title={base} id="dropdown-target">
        {
          rates.map((rate) => {
            return (
              <MenuItem key={rate} onSelect={() => { this.handleTargetSelect(rate[0]); }}>{rate[0]}</MenuItem>
            );
          })
        }
      </SplitButton>
    );
  }
}

BaseCurr.propTypes = propTypes;

export default BaseCurr;