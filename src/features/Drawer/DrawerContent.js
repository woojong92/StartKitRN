import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Dimensions,
  useWindowDimensions,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { logOut } from '../Authentication/authenticationSlice';
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import TitleHeader from '../../components/Place/TitleHeader';
import { BackIcon } from '../../components/icons';

DrawerContent.propTypes = {
  navigation: PropTypes.object,
};

export default function DrawerContent({ navigation }) {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          backgroundColor: colors.white,
        }}>
        <View
          style={{
            height: 50,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <TouchableWithoutFeedback onPress={() => navigation.closeDrawer()}>
            <View>
              <BackIcon />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <View>
            <Text>이름 및 회원정보 버튼</Text>
          </View>
          <View>
            <Text>포인트 북마크 및 쿠폰</Text>
          </View>
        </View>
        <View>
          <Text>DrawerItems</Text>
        </View>

        <Button title="logout" onPress={() => dispatch(logOut())} />
      </SafeAreaView>
    </>
  );
}
