import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

function LoginInput({ password, email, setEmail, setPassword }) {
  return (
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
        <TouchableWithoutFeedback onPress={() => navigation.push('SignUp')}>
          <Text style={{ marginRight: 5 }}>이메일 회원가입</Text>
        </TouchableWithoutFeedback>
        <Text>|</Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.push('ForgotPassword')}>
          <Text style={{ marginLeft: 5 }}>비밀번호 찾기</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
