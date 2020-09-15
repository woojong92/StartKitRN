import React, { useState, useEffect } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@react-navigation/native';
import { View, TouchableOpacity, Text, Keyboard } from 'react-native';

const StyledTextInputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props?.lineColor};
`;

const StyledTextInput = styled.TextInput`
  min-width: 70%;
  padding: 10px;
  text-decoration: none;
  font-size: 18px;
  color: ${(props) => props?.textColor};
  border: 0px;
`;

const TextInputContainer = ({
  textContentType,
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
  maxLength,
  marginBottom = 15,
  returnKeyType = 'done',
  editable = true,
  textInputRef = null,
  onSubmitEditing = () => Keyboard.dismiss(),
}) => {
  const { colors } = useTheme();
  const [focused, setFocused] = useState(false);

  return (
    <View style={{ marginBottom: marginBottom }}>
      {label && <Text style={{ paddingVertical: 5 }}>{label}</Text>}

      <StyledTextInputContainer
        style={{ ...style }}
        lineColor={focused ? colors.secondary : colors.gray}>
        {leftItem}
        <StyledTextInput
          ref={textInputRef}
          textColor={focused ? colors.secondary : colors.black}
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => setValue(text)}
          onFocus={() => setFocused(true)}
          onEndEditing={() => setFocused(false)}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          textContentType={textContentType}
          blurOnSubmit={false}
          onSubmitEditing={onSubmitEditing}
          editable={editable}
        />
        {rightItem}
      </StyledTextInputContainer>
      {warningMesseage !== 'disable' && (
        <Text style={{ marginTop: 5 }}>{warningMesseage}</Text>
      )}
    </View>
  );
};

export default TextInputContainer;
