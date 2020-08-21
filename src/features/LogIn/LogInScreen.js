import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { setUserToken } from './logInSlice';

LogInScreen.propTypes = {
  navigation: PropTypes.object,
};

export default function LogInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // 이메일 로그인
  // 소셜 로그인

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, padding: 15 }}>
          {/* 헤더 영역 */}
          <View style={{ height: 80, backgroundColor: 'red' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
          {/* 이메일 로그인 영역 */}
          <View>
            <Text>로그인</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <TouchableOpacity
              style={{
                width: '100%',
                height: 60,
                backgroundColor: 'green',
              }}
              onPress={() => dispatch(setUserToken())}>
              <Text>로그인</Text>
            </TouchableOpacity>
            <Button title="이메일 회원가입" />
            <Button title="비밀번호 찾기" />
          </View>
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
