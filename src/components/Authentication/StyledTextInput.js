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
  maxLength,
  marginBottom = 15,
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
          textColor={focused ? colors.secondary : colors.black}
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => setValue(text)}
          onFocus={() => setFocused(true)}
          onEndEditing={() => setFocused(false)}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          maxLength={maxLength}
        />
        {rightItem}
      </StyledTextInputContainer>
      {warningMesseage !== 'disable' && (
        <Text style={{ marginTop: 5 }}>{warningMesseage}</Text>
      )}
    </View>
  );
};

// export const BirthGenderTextInputContainer = ({
//   label,
//   leftItem,
//   rightItem,
//   placeholder,
//   value,
//   setValue,
//   style,
//   secureTextEntry = false,
//   keyboardType = 'default',
//   warningMesseage,
// }) => {
//   const { colors } = useTheme();
//   const [focused, setFocused] = useState(false);
//   return (
//     <View>
//       {label && <Text style={{ paddingVertical: 10 }}>{label}</Text>}

//       <StyledTextInputContainer
//         style={{ borderBottomWidth: 0, backgroundColor: 'purple' }}
//         lineColor={focused ? colors.secondary : colors.gray}>
//         <StyledTextInput
//           style={{
//             backgroundColor: 'red',
//             width: '45%',
//             borderBottomWidth: 1,
//             borderBottomColor: focused ? colors.secondary : colors.gray,
//           }}
//           maxLength={6}
//           textColor={focused ? colors.secondary : colors.black}
//           placeholder={placeholder}
//           value={value}
//           onChangeText={(text) => setValue(text)}
//           onFocus={() => setFocused(true)}
//           onEndEditing={() => setFocused(false)}
//           secureTextEntry={secureTextEntry}
//           keyboardType={keyboardType}
//         />
//         <View
//           style={{
//             margin: 0,
//             width: 10,
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderBottomWidth: 1,
//             borderBottomColor: 'black',
//           }}></View>
//         <StyledTextInput
//           textColor={focused ? colors.secondary : colors.black}
//           placeholder={placeholder}
//           value={value}
//           onChangeText={(text) => setValue(text)}
//           onFocus={() => setFocused(true)}
//           onEndEditing={() => setFocused(false)}
//           secureTextEntry={secureTextEntry}
//           keyboardType={keyboardType}
//         />
//       </StyledTextInputContainer>
//       {warningMesseage !== '' && (
//         <Text style={{ marginTop: 10 }}>{warningMesseage}</Text>
//       )}
//     </View>
//   );
// };

export default TextInputContainer;
