import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';

const ValidThruMask = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="00/00"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

ValidThruMask.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ValidThruMask;
