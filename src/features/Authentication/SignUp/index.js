import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const Input = ({ placeholder, value, setValue }) => {
  const onChangeText = (text) => {
    setValue(text);
  };
  return (
    <TextInput
      style={{
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 30,
      }}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, padding: 30 }}>
          <Text style={{ fontSize: 30, marginBottom: 40, fontWeight: 'bold' }}>
            필수 정보 입력
          </Text>
          <Input placeholder="이메일" setValue={setEmail} value={email} />
          <Input placeholder="이름" setValue={setName} value={name} />
          <Input
            placeholder="생년월일[8자리] - ex)2020/09/27"
            setValue={setBirth}
            value={birth}
          />
          <Input placeholder="성별" setValue={setGender} value={gender} />
          <Button title="다음" onPress={() => Alert.alert('다음')} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
