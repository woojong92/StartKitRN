import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import Theme from '../../theme'

export default function HorizontalCardView () {
  return (
    <ScrollView
      scrollEventThrottle={16}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={{height: 138, width: 156, marginRight: 5, backgroundColor: Theme.colors.primary }}>
        
      </View>
      <View style={{height: 138, width: 156, marginRight: 5, backgroundColor: Theme.colors.primary }}>
        
      </View>
      <View style={{height: 138, width: 156, marginRight: 5, backgroundColor: Theme.colors.primary }}>
        
      </View>
    </ScrollView>
  )
}