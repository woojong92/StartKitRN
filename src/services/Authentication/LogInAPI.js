import axios from 'axios';
const host = 'http://192.168.0.106:8081';

export default async function logInAPI(params) {
  console.log('login');
  console.log(params);
  const { userEmail, userEmailType, userPassword, userSnsKey } = params;
  try {
    const response = await axios({
      method: 'post',
      url: `${host}/login`,
      data: {
        userEmail: userEmail,
        userEmailType: userEmailType,
        userPassword: userEmailType !== 'user' ? null : userPassword,
        userSnsKey: userEmailType !== 'user' ? userSnsKey : null,
      },
    });
    console.log(response);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.response.data);
    return error;
  }
}
