import auth from '@react-native-firebase/auth';
import { Platform } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';
import { NaverLogin, getProfile } from '@react-native-seoul/naver-login';

// const logCallback = (log, callback) => {
//   console.log(log);
//   callback;
// };

// 네이버 로그인 관련 설정 --> 따로 관리 예정
const iosKeys = {
  kConsumerKey: 'f0ZEoyHAvSRdbFOM5F3K',
  kConsumerSecret: 'OFsa8i2gAr',
  kServiceAppName: 'StartKitRN',
  kServiceAppUrlScheme: 'naverlogin', // only for iOS
};
const androidKeys = {
  kConsumerKey: 'f0ZEoyHAvSRdbFOM5F3K',
  kConsumerSecret: 'OFsa8i2gAr',
  kServiceAppName: 'StartKitRN',
};

const initials = Platform.OS === 'ios' ? iosKeys : androidKeys;

// 네이버 로그인
export const onNaverButtonPress = () => {
  return new Promise((resolve, reject) => {
    NaverLogin.login(initials, async (err, token) => {
      console.log(`\n\n  Token is fetched  :: ${JSON.stringify(token)} \n\n`);
      // setNaverToken(token);
      if (err) {
        reject(err);
        return;
      }
      resolve(token);
    });
  });
};

// 카카오 로그인
export async function onKakaoButtonPress() {
  console.log('push kakao');
  try {
    const result = await KakaoLogins.login([
      KAKAO_AUTH_TYPES.Talk,
      KAKAO_AUTH_TYPES.Account,
    ]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// 페이스북 로그인
export async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }
  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();
  if (!data) {
    throw 'Something went wrong obtaining access token';
  }
  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );
  console.log(facebookCredential);
  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

// 구글 로그인
export async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  console.log(googleCredential);
  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
