import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import cloud from '../../assets/animations/cloud.json';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const ViewHeader = styled.View`
  background-color: #add8e6;
  width: ${RFPercentage(100)}%;
  height: ${RFPercentage(25)}px;
  flex-direction: row;
`;

export const TextHeader = styled.Text`
  color: #fff;
  font-size: 25;
  font-weight: bold;
  /* justify-content: flex-end; */
  text-align: right;
  align-self: flex-end;
`;
export const ButtonHeader = styled.TouchableOpacity`
  /* flex: 1; */
  height: ${RFPercentage(5)}px;
  width: ${RFValue(300)};
  /* background-color: red; */
  align-self: center;
  justify-content: center;
`;

export const LottieCloud = styled(LottieView).attrs({
  source: cloud,
  autoPlay: true,
  loop: true,
})`
  /* height: 60; */
  height: ${RFPercentage(9)}px;
  flex-direction: row;
  align-self: center;
  /* margin-left: 100; */
  margin-left: ${RFValue(4)}; ;
`;
