import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import cloud from '../../assets/animations/cloud.json';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const ViewHeader = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: ${RFPercentage(25)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const TextHeader = styled.Text`
  font-size: 30;
  color: ${({theme}) => theme.colors.text};
  font-weight: bold;
`;

export const LottieCloud = styled(LottieView).attrs({
  source: cloud,
  autoPlay: true,
  loop: true,
})`
  height: ${RFPercentage(9)}px;
  flex-direction: row;
  align-self: center;
`;
