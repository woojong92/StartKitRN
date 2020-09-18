import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { BackIcon } from '../icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Theme from '../../theme';

ScreenHeader.propTypes = {
  navigation: PropTypes.object,
  title: PropTypes.string,
};

export default function ScreenHeader({ navigation, title }) {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 60,
          marginHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          paddingBottom: 5,
          borderColor: Theme.colors.gray,
          // marginBottom: 10,
        }}>
        <View style={{ justifyContent: 'flex-start', flex: 1 }}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableWithoutFeedback>
        </View>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
        <View style={{ flex: 1, justifyContent: 'flex-end' }} />
      </View>
    </SafeAreaView>
  );
}
