import axios from 'axios';
const host = 'http://192.168.0.106:8081';

export default async function signUpAPI(params) {
  const {
    userEmail,
    userEmailType,
    userName,
    userNickname,
    userPassword,
    userGender,
    userPhone,
    userSnsKey,
    serviceAccept,
    locationAccept,
    marketingAccept,
  } = params;
  try {
    const response = await axios({
      method: 'post',
      url: `${host}/login`,
      data: {
        userEmail: userEmail,
        userEmailType: userEmailType,
        userName: userName,
        userPassword: userEmailType !== 'user' ? null : userPassword,
        userGender: userGender,
        userAddress: null,
        userPhone: userPhone,
        userNickname: userNickname,
        userSnsKey: userEmailType !== 'user' ? userSnsKey : null,
        serviceAccept: serviceAccept,
        locationAccept: locationAccept,
        marketingAccept: marketingAccept,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}
