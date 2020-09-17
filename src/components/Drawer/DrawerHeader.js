import React from 'react';
import styled from '@emotion/native';
import { View, TouchableWithoutFeedback } from 'react-native';
import { CloseIcon } from '../icons';
import PropTypes from 'prop-types';

const DrawerContentHeader = styled.View`
  height: 50px;
  justify-content: center;
  align-items: flex-end;
`;

DrawerHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default function DrawerHeader({ onClose }) {
  return (
    <DrawerContentHeader>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ padding: 10, marginRight: 10 }}>
          <CloseIcon size={30} />
        </View>
      </TouchableWithoutFeedback>
    </DrawerContentHeader>
  );
}
