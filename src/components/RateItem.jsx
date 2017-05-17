import React, { PropTypes } from 'react';

const propTypes = {
  rate: PropTypes.array.isRequired
};

const RateItem = ({ rate }) => {
  return (
    <tr>
      <td>{rate[0]}</td>
      <td>{rate[1]}</td>
    </tr>
  );
};

RateItem.propTypes = propTypes;

export default RateItem;