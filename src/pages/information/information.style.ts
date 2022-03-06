import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ViewInformation = styled.View`
  flex: 1;
  /* background-color: #fffafa; */
  background-color: #f2f2f2;
`;

export const CardsContainerInformation = styled.View`
  flex: 1;
  margin: ${RFPercentage(3)}px;
  margin-top: ${RFPercentage(2)}px;
`;

export const TextBold = styled.Text`
  font-size: 17;
  color: #808080;
`;

export const ViewText = styled.View`
  align-items: center;
  margin-top: ${RFValue(6)};
`;
