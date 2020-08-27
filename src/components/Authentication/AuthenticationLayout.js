import styled from '@emotion/native';

export const AuthenticationLayout = styled.View`
  flex: 1;
  padding: 30px;
`;

export const AuthenticationTitleContainer = styled.View`
  margin-vertical: 30px;
`;

export const AuthenticationTitle = styled.Text`
  color: ${(props) => props.color || '#111'};
  font-size: 30px;
  text-align: left;
  font-weight: bold;
`;

export const AuthenticationSubTitle = styled.Text`
  color: #111;
  font-size: 15;
`;
