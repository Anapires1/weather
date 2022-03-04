import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import cloud from '../assets/animations/cloud.json'
import { RFPercentage } from 'react-native-responsive-fontsize';

export const ViewHeader = styled.View`
  background-color: #add8e6;
  width: ${RFPercentage(100)}%;
  height: ${RFPercentage(25)}px;
  flex-direction: row;
`

export const TextHeader = styled.Text`
  font-size: 30;
  /* margin-top: 70; */
  margin-top: ${RFPercentage(11)}px;
  color: white;
  font-weight: bold;
  margin-left: ${RFPercentage(2)}px;
`

export const LottieCloud = styled(LottieView).attrs({
  source: cloud,
  autoPlay: true,
  loop: true,
})`
  /* height: 60; */
  height: ${RFPercentage(9)}px;;
  flex-direction: row;
  align-self: center;
  /* margin-left: 100; */
  margin-left: ${RFPercentage(15)}px;;
`
