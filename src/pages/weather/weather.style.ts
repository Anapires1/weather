import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';
import loading from '../../assets/animations/loading.json';

export const LottieLoading = styled(LottieView).attrs({
  source: loading,
  autoPlay: true,
  loop: true,
})`
  justify-content: center;
  align-items: center;
`;
