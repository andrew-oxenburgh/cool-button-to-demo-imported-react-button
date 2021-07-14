import React from 'react';
import PropTypes from 'prop-types';

export default function DemoButton({label, backgroundColor, onClick}) {
   let style = backgroundColor ? {backgroundColor} : {backgroundColor: 'red'}

   return (
      <button onClick={onClick}
              style={style}>
         {label}
      </button>
   );
}

DemoButton.propTypes = {
   backgroundColor: PropTypes.string,
   label: PropTypes.string.isRequired,
   onClick: PropTypes.func,
};

DemoButton.defaultProps = {
   backgroundColor: 'yellow',
};
