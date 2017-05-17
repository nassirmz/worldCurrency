import React, { Component, PropTypes } from 'react';

import { SplitButton, MenuItem } from 'react-bootstrap';

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
    console.log(rates);
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

export default BaseCurr;