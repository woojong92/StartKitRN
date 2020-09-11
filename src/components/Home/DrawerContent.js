import React from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import Theme from '../../theme';
import GradientItem from './GradientItem';

export default function DrawerContent({ navigation }) {
  return (
    <GradientItem
      style={{
        flex: 1,
        width: 116,
      }}>
      <SafeAreaView>
        <View style={{ justifyContent: 'center', marginTop: 72 }}>
          <Text
            style={{
              color: Theme.colors.white,
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            비스키트님
          </Text>
        </View>
      </SafeAreaView>
    </GradientItem>
  );
}
