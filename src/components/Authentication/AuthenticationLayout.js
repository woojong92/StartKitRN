import styled from '@emotion/native';
import Theme from '../../theme';

export const AuthenticationSafeAreaViewContainer = styled.SafeAreaView`
  flex: 1;
`;

export const AuthenticationLayout = styled.View`
  flex: 1;
  padding-horizontal: 30px;
`;

export const AuthenticationTitleContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 60px;
`;

export const AuthenticationTitle = styled.Text`
  color: ${(props) => props.color || Theme.colors.black};
  font-size: 24px;
  text-align: left;
  font-weight: bold;
`;

export const AuthenticationSubTitle = styled.Text`
  color: ${Theme.colors.black};
  font-size: 14px;
`;
