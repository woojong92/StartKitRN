import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function SignUpScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Forgot Password Screen</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
