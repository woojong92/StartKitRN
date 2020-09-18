import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styled from '@emotion/native';
import UserInfo from '../../components/Drawer/UserInfo';
import DrawerHeader from '../../components/Drawer/DrawerHeader';
import DrawerItems from '../../components/Drawer/DrawerItems';

import theme from '../../theme';
const { colors } = theme;

const DrawerContentContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  background-color: ${colors.background};
`;

DrawerContent.propTypes = {
  navigation: PropTypes.object,
};

export default function DrawerContent({ navigation }) {
  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <>
      <DrawerContentContainer>
        <DrawerHeader onClose={closeDrawer} />

        <UserInfo />

        {/* DrawerItmes */}
        <ScrollView>
          <DrawerItems navigation={navigation} />
        </ScrollView>
      </DrawerContentContainer>
    </>
  );
}
