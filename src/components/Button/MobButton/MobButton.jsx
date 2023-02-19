import React from 'react';
import PropTypes from 'prop-types';
import { MobButton } from './MobButton';

MobButton = ({ children, onClick, ...allyProps }) => {
  <button type="button" onClick={onClick} {...allyProps}>
    {children}
  </button>;
};

MobButton.defaultProps = {
  onClick: () => null,
  children: null,
};

MobButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
