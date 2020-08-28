import auth from '@react-native-firebase/auth';

import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';

// const logCallback = (log, callback) => {
//   console.log(log);
//   callback;
// };

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

// .then(result => {
//   setToken(result.accessToken);
//   logCallback(
//     `Login Finished:${JSON.stringify(result)}`,
//     setLoginLoading(false),
//   );
// })
// .catch(err => {
//   if (err.code === 'E_CANCELLED_OPERATION') {
//     logCallback(`Login Cancelled:${err.message}`, setLoginLoading(false));
//   } else {
//     logCallback(
//       `Login Failed:${err.code} ${err.message}`,
//       setLoginLoading(false),
//     );
//   }
// });

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

export async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  console.log(googleCredential);
  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
