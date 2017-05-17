import React, { PropTypes } from 'react';

const propTypes = {
  rate: PropTypes.array.isRequired
};

const RateItem = ({ rate }) => {
  return (
    <tbody>
      <tr>
        <th>{rate[1]}</th>
        <th>{rate[0]}</th>
      </tr>
    </tbody>
  );
};

RateItem.propTypes = propTypes;

export default RateItem;