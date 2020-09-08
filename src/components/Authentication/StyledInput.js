import React, { useState } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@react-navigation/native';
import { View, TouchableOpacity, Text } from 'react-native';

const StyledPhoneNumberTextInputContainer = ({
  placeholder,
  value,
  setValue,
  style,
  type = 'none',
  sendConfirmMessage,
}) => {
  const { colors } = useTheme();
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: focused ? colors.secondary : colors.gray,
      }}>
      <StyledTextInput
        style={{ ...style }}
        textColor={focused ? colors.secondary : colors.black}
        lineColor={focused ? colors.secondary : colors.gray}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => setValue(text)}
        onFocus={() => setFocused(true)}
        onEndEditing={() => setFocused(false)}
        // keyboardType={'number-pad'}
      />
      {type === 'phoneNumber' ? (
        <TouchableOpacity onPress={sendConfirmMessage}>
          <View>
            <Text>인증번호 전송</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <Text>3:00</Text>
      )}
    </View>
  );
};

const StyledTextInput = styled.TextInput`
  padding: 10px;
  text-decoration: none;
  font-size: 18px;
  color: ${(props) => props?.textColor};
  border: 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props?.lineColor};
`;

const StyledTextInputContainer = ({
  placeholder,
  value,
  setValue,
  style,
  type = 'none',
}) => {
  const { colors } = useTheme();
  const [focused, setFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(type === 'password');
  return (
    <StyledTextInput
      style={{ ...style }}
      textColor={focused ? colors.secondary : colors.black}
      lineColor={focused ? colors.secondary : colors.gray}
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => setValue(text)}
      onFocus={() => setFocused(true)}
      onEndEditing={() => setFocused(false)}
      secureTextEntry={secureTextEntry}
      // keyboardType={'number-pad'}
    />
  );
};
