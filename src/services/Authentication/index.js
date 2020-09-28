// import LogInAPI from './LogInAPI';
// import SnsAPI from './SnsAPI';
// import SignUpAPI from './SignUpAPI';

// export LogInAPI;
// export SnsAPI;
// export SignUpAPI;

// import auth from '@react-native-firebase/auth';
// import { Platform } from 'react-native';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
// import { GoogleSignin } from '@react-native-community/google-signin';
// import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';

// import { NaverLogin, getProfile } from '@react-native-seoul/naver-login';
// import axios from 'axios';

// // const logCallback = (log, callback) => {
// //   console.log(log);
// //   callback;
// // };

// const iosKeys = {
//   kConsumerKey: 'f0ZEoyHAvSRdbFOM5F3K',
//   kConsumerSecret: 'OFsa8i2gAr',
//   kServiceAppName: 'StartKitRN',
//   kServiceAppUrlScheme: 'naverlogin', // only for iOS
// };

// const androidKeys = {
//   kConsumerKey: 'f0ZEoyHAvSRdbFOM5F3K',
//   kConsumerSecret: 'OFsa8i2gAr',
//   kServiceAppName: 'StartKitRN',
// };

// const initials = Platform.OS === 'ios' ? iosKeys : androidKeys;

// export const onNaverButtonPress = () => {
//   return new Promise((resolve, reject) => {
//     NaverLogin.login(initials, async (err, token) => {
//       console.log(`\n\n  Token is fetched  :: ${JSON.stringify(token)} \n\n`);
//       // setNaverToken(token);
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(token);
//     });
//   });
// };

// export async function onKakaoButtonPress() {
//   console.log('push kakao');
//   try {
//     const result = await KakaoLogins.login([
//       KAKAO_AUTH_TYPES.Talk,
//       KAKAO_AUTH_TYPES.Account,
//     ]);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function onFacebookButtonPress() {
//   // Attempt login with permissions
//   const result = await LoginManager.logInWithPermissions([
//     'public_profile',
//     'email',
//   ]);
//   if (result.isCancelled) {
//     throw 'User cancelled the login process';
//   }
//   // Once signed in, get the users AccesToken
//   const data = await AccessToken.getCurrentAccessToken();
//   if (!data) {
//     throw 'Something went wrong obtaining access token';
//   }
//   // Create a Firebase credential with the AccessToken
//   const facebookCredential = auth.FacebookAuthProvider.credential(
//     data.accessToken,
//   );
//   console.log(facebookCredential);
//   // Sign-in the user with the credential
//   return auth().signInWithCredential(facebookCredential);
// }

// export async function onGoogleButtonPress() {
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//   console.log(googleCredential);
//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }

// const host = 'http://192.168.0.106:8081';

// export async function logInAPI(params) {
//   console.log('login');
//   console.log(params);
//   const { userEmail, userEmailType, userPassword, userSnsKey } = params;
//   try {
//     const response = await axios({
//       method: 'post',
//       url: `${host}/login`,
//       data: {
//         userEmail: userEmail,
//         userEmailType: userEmailType,
//         userPassword: userEmailType !== 'user' ? null : userPassword,
//         userSnsKey: userEmailType !== 'user' ? userSnsKey : null,
//       },
//     });
//     console.log(response);
//     console.log(response.data);
//     return response;
//   } catch (error) {
//     console.log(error);
//     console.log(error.response.data);
//     return error;
//   }
// }

// export async function signUpAPI(params) {
//   const {
//     userEmail,
//     userEmailType,
//     userName,
//     userNickname,
//     userPassword,
//     userGender,
//     userPhone,
//     userSnsKey,
//     serviceAccept,
//     locationAccept,
//     marketingAccept,
//   } = params;
//   try {
//     const response = await axios({
//       method: 'post',
//       url: 'http://192.168.0.106:8081/login',
//       data: {
//         userEmail: userEmail,
//         userEmailType: userEmailType,
//         userName: userName,
//         userPassword: userEmailType !== 'user' ? null : userPassword,
//         userGender: userGender,
//         userAddress: null,
//         userPhone: userPhone,
//         userNickname: userNickname,
//         userSnsKey: userEmailType !== 'user' ? userSnsKey : null,
//         serviceAccept: serviceAccept,
//         locationAccept: locationAccept,
//         marketingAccept: marketingAccept,
//       },
//     });
//     return response;
//   } catch (error) {
//     return error;
//   }
// }
