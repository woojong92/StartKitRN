import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

OnBoarding.propTypes = {
  navigation: PropTypes.object,
};

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

export default function OnBoarding({ navigation }) {
  return (
    <>
      {/* <SafeAreaView style={{ flex: 0 }}></SafeAreaView> */}
      {/* <StatusBar barStyle="light-content" /> */}
      <SafeAreaView style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>환영합니다.</Text>
        </View>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('LogIn')}>
          <View
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#7300AC',
              marginTop: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 25,
                fontWeight: '600',
              }}>
              시작하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: '#7300AC' }}></SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
