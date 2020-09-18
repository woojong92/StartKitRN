import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
} from 'react-native';
import ScreenHeader from '../../components/Molecules/ScreenHeader';
import styled from '@emotion/native';
import { ChevronForwardIcon } from '../../components/icons';
import theme from '../../theme';

const { colors } = theme;

const MyDataItemContainer = styled.View`
  // background-color: red;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 20px;
  border-bottom-width: ${(props) =>
    props?.underLine === true ? '1px' : '0px'};
  border-bottom-color: ${colors.lightGray};
  align-items: center;
`;

const MyDataItem = ({ children, disabled, underLine = true }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Alert.alert('ggg')}
      disabled={disabled}>
      <MyDataItemContainer underLine={underLine}>
        <Text>{children}</Text>
        {!disabled && <ChevronForwardIcon size={16} color={colors.gray} />}
      </MyDataItemContainer>
    </TouchableWithoutFeedback>
  );
};

// const MyDataItem

MyDataScreen.propTypes = {
  navigation: PropTypes.object,
};

export default function MyDataScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader navigation={navigation} title={'마이데이터'} />
      <ScrollView style={{ marginBottom: 20 }}>
        <View style={{ height: 230 }}>
          <MyDataItem underLine={false} disabled>
            하루 사용량
          </MyDataItem>

          <View
            style={{ flex: 1, backgroundColor: colors.lightGray, padding: 20 }}>
            <View
              style={{
                backgroundColor: colors.white,
                borderRadius: 4,
                height: '50%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18 }}>모바일 데이터</Text>
                <Text style={{ fontSize: 21 }}>53.5MB</Text>
              </View>

              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18 }}>WiFi 데이터</Text>
                <Text style={{ fontSize: 21 }}>5.4GB</Text>
              </View>
            </View>

            <View
              style={{
                // backgroundColor: 'blue',
                height: '50%',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: 5,
              }}>
              <Text style={{ marginBottom: 5 }}>WAKE UP WIFI를 사용하여</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    color: colors.secondary,
                    fontWeight: 'bold',
                  }}>
                  27,0000
                </Text>
                <Text>을 절약했어요.</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{}}>
          <MyDataItem disabled>어플레케이션 별 사용량</MyDataItem>
          <View
            style={{
              height: 200,
              borderBottomColor: colors.lightGray,
              borderBottomWidth: 1,
              marginHorizontal: 20,
            }}></View>
        </View>
        <MyDataItem>주요 사용 위치</MyDataItem>
        <MyDataItem>추천 모바일 상품 보러가기</MyDataItem>
        <MyDataItem>모바일 개통 상담하기</MyDataItem>
      </ScrollView>
    </View>
  );
}
