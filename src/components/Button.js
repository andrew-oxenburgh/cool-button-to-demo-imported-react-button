import React from 'react';
import PropTypes from 'prop-types';

export default function Button({label, backgroundColor, onClick}) {
   let style = backgroundColor ? {backgroundColor} : {backgroundColor: 'red'}

   return (
      <button onClick={onClick}
              style={style}>
         {label}
      </button>
   );
}

Button.propTypes = {
   backgroundColor: PropTypes.string,
   label: PropTypes.string.isRequired,
   onClick: PropTypes.func,
};

Button.defaultProps = {
   backgroundColor: 'yellow',
};
