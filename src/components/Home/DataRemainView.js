import React from 'react';
import { View, Text, Image } from 'react-native';
import GradientItem from './GradientItem';
import { useTheme } from '@react-navigation/native';
import { ChevronForwardIcon } from '../icons';

export default function DataRemainView() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        height: 81,
        backgroundColor: colors.background,
        justifyContent: 'center',
        paddingHorizontal: 22,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginRight: 4, fontWeight: 'bold' }}>B요금제</Text>
        <ChevronForwardIcon size={18} />
      </View>
      <View>
        <View
          style={{
            backgroundColor: colors.gray,
            height: 19,
            marginTop: 12,
          }}>
          <Text
            style={{
              textAlign: 'right',
              marginRight: 7,
            }}>
            8GB
          </Text>
        </View>
        <GradientItem
          style={{
            height: 19,
            top: 8,
            width: '70%',
            position: 'absolute',
          }}>
          <Text
            style={{
              color: colors.white,
              textAlign: 'right',
              marginRight: 7,
            }}>
            6.7GB
          </Text>
        </GradientItem>
      </View>
    </View>
  );
}
