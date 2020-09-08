import React, { useState } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@react-navigation/native';
import { View, TouchableOpacity, Text } from 'react-native';

const StyledTextInputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props?.lineColor};
`;

const StyledTextInput = styled.TextInput`
  padding: 10px;
  text-decoration: none;
  font-size: 18px;
  color: ${(props) => props?.textColor};
  border: 0px;
`;

const TextInputContainer = ({
  label,
  leftItem,
  rightItem,
  placeholder,
  value,
  setValue,
  style,
  secureTextEntry = false,
  keyboardType = 'default',
  warningMesseage,
}) => {
  const { colors } = useTheme();
  const [focused, setFocused] = useState(false);
  return (
    <View>
      {label && <Text style={{ paddingVertical: 10 }}>{label}</Text>}

      <StyledTextInputContainer
        style={{ ...style }}
        lineColor={focused ? colors.secondary : colors.gray}>
        {leftItem}
        <StyledTextInput
          textColor={focused ? colors.secondary : colors.black}
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => setValue(text)}
          onFocus={() => setFocused(true)}
          onEndEditing={() => setFocused(false)}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
        {rightItem}
      </StyledTextInputContainer>
      {warningMesseage !== '' && (
        <Text style={{ marginTop: 10 }}>{warningMesseage}</Text>
      )}
    </View>
  );
};

export default TextInputContainer;
