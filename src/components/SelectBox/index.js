import React, { useState } from 'react';
import Modal from 'react-native-modal';
import styled from '@emotion/native';
import { TouchableOpacity } from 'react-native';
import theme from '../../theme';
import LinearGradient from 'react-native-linear-gradient';

const { colors } = theme;

const StyledSelectBoxItem = styled.View`
  width: 100%;
  padding: 20px;
  // background-color: ${colors.white};
  border-bottom-color: ${colors.gray};
  border-bottom-width: 0.5;
`;

const StyledLinearGradientItem = styled(LinearGradient)`
  width: 100%;
  padding: 20px;
  border-bottom-color: ${colors.gray};
  border-bottom-width: 0.5;
`;

const StyledSelectBoxText = styled.Text`
  color: ${colors.black};
  font-size: 20px;
  text-align: center;
  text-align-vertical: center;
`;

function LinearGradientItem({ children }) {
  return (
    <StyledLinearGradientItem
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[colors.primary, colors.secondary]}>
      <StyledSelectBoxText>{children}</StyledSelectBoxText>
    </StyledLinearGradientItem>
  );
}

function SelectBoxItem({ item, value, setValue, onToggleVisible }) {
  const onPress = () => {
    setTimeout(() => {
      setValue(item);
    }, 100);
    onToggleVisible();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      {value === item ? (
        <LinearGradientItem>
          <StyledSelectBoxText>{item}</StyledSelectBoxText>
        </LinearGradientItem>
      ) : (
        <StyledSelectBoxItem>
          <StyledSelectBoxText>{item}</StyledSelectBoxText>
        </StyledSelectBoxItem>
      )}
    </TouchableOpacity>
  );
}

const StyledSelectBoxItems = styled.View`
  background-color: white;
  width: 200px;
  justify-content: center;
  border-radius: 4px;
`;

function SelectBoxItems({ items, value, setValue, onToggleVisible }) {
  return (
    <StyledSelectBoxItems>
      {items?.map((item) => (
        <SelectBoxItem
          key={item}
          item={item}
          value={value}
          setValue={setValue}
          onToggleVisible={onToggleVisible}
        />
      ))}
    </StyledSelectBoxItems>
  );
}
// isVisible: 모달의 보여짐 여부
// setVisible: 모달의 보여짐 여부 세팅
// value: 현재 선택된 값
// setValue: value값 세팅
// items: 선택될 아이템들
export default function SelectBoxContainer({
  isVisible,
  setVisible,
  value,
  setValue,
  items,
}) {
  const onToggleVisible = () => {
    setVisible(!isVisible);
  };

  return (
    <Modal
      isVisible={isVisible}
      style={{ justifyContent: 'center', alignItems: 'center' }}
      backdropOpacity={0.8}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}>
      <SelectBoxItems
        items={items}
        value={value}
        setValue={setValue}
        onToggleVisible={onToggleVisible}
      />
    </Modal>
  );
}
