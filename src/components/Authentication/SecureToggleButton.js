import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { EyeOffIcon, EyeIcon } from '../icons';
import styled from '@emotion/native';
import PropTypes from 'prop-types';

const SecureToggleButtonContainer = styled.View`
  padding: 8px;
  align-items: center;
`;

SecureToggleButton.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default function SecureToggleButton({ value, setValue }) {
  const onToggleSecure = () => {
    setValue(!value);
  };

  return (
    <TouchableWithoutFeedback onPress={onToggleSecure}>
      <SecureToggleButtonContainer>
        {value ? <EyeOffIcon /> : <EyeIcon />}
      </SecureToggleButtonContainer>
    </TouchableWithoutFeedback>
  );
}
