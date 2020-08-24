import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { setUserToken } from './logInSlice';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

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
          <View
            style={{
              height: 80,
              //   justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>back </Text>
            </TouchableOpacity>
          </View>
          {/* 이메일 로그인 영역 */}
          <View>
            <Text style={{ fontSize: 30, fontWeight: '500' }}>로그인</Text>

            {/* 로그인 Input 영역 */}
            <View style={{ marginBottom: 50, marginTop: 50 }}>
              <TextInput
                style={{
                  height: 40,
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                  marginBottom: 30,
                }}
                placeholder="이메일"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
              <TextInput
                style={{
                  height: 40,
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                }}
                placeholder="비밀번호"
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
            </View>

            {/* 로그인 버튼 */}
            <TouchableOpacity
              style={{
                width: '100%',
                height: 60,
                backgroundColor: '#e5e5e5',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
                marginBottom: 15,
              }}
              onPress={() => dispatch(setUserToken())}>
              <Text>로그인</Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableWithoutFeedback
                onPress={() => navigation.push('SignUp')}>
                <Text style={{ marginRight: 5 }}>이메일 회원가입</Text>
              </TouchableWithoutFeedback>
              <Text>|</Text>
              <TouchableWithoutFeedback
                onPress={() => navigation.push('ForgotPassword')}>
                <Text style={{ marginLeft: 5 }}>비밀번호 찾기</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          {/* 이메일 로그인 영역 End */}

          <View style={{ marginTop: 'auto' }}>
            <Text>sns로 간편 로그인</Text>
            <View style={{}}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 60,
                  backgroundColor: 'yellow',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                  marginBottom: 15,
                }}
                onPress={() => dispatch(setUserToken())}>
                <Text>카카오로 로그인</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 60,
                  backgroundColor: 'blue',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                  marginBottom: 15,
                }}
                onPress={() => dispatch(setUserToken())}>
                <Text>페이스북으로 로그인</Text>
              </TouchableOpacity>
            </View>
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
