import styled from '@emotion/native';
import Theme from '../../theme';

export const AuthenticationLayout = styled.View`
  flex: 1;
  padding: 30px;
`;

export const AuthenticationTitleContainer = styled.View`
  margin-vertical: 30px;
`;

export const AuthenticationTitle = styled.Text`
  color: ${(props) => props.color || Theme.colors.black};
  font-size: 30px;
  text-align: left;
  font-weight: bold;
`;

export const AuthenticationSubTitle = styled.Text`
  color: ${Theme.colors.black};
  font-size: 15;
`;