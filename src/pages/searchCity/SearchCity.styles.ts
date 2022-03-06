import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';
import search from '../../assets/animations/search.json';

export const ViewSearch = styled.View`
  flex: 1;
  background-color: #f2f2f2;
`;

export const ViewText = styled.View`
  /* margin-top: 120; */
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFPercentage(12)}px;
  /* justify-content: center; */
`;

export const TextBold = styled.Text`
  font-size: 25;
  font-weight: bold;
  color: #808080;
  text-align: center;
  line-height: 40;
`;
export const TextHome = styled.Text`
  margin-top: 10;
  font-size: 17;
  color: #808080;
  text-align: center;
`;

export const CardsContainer = styled.View`
  flex: 1;
  /* background-color: red; */
  margin: ${RFPercentage(3)}px;
  margin-top: ${RFPercentage(2)}px;
`;

export const LottieSearch = styled(LottieView).attrs({
  source: search,
  autoPlay: true,
  loop: true,
})`
  justify-content: center;
  align-items: center;
`;
