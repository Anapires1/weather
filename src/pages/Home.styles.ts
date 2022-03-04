import styled from 'styled-components/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const ViewHome =  styled.View`
  flex: 1;
  /* background-color: #fffafa; */
  background-color: #f2f2f2;
`;

export const ViewText = styled.View`
  margin-top: 120;
  flex: 1;
  align-items: center;
  /* justify-content: center; */
`;

export const TextBold =  styled.Text`
  font-size: 25;
  font-weight: bold;
  color: #808080;
  text-align: center;
  line-height: 40;
`;
export const TextHome =  styled.Text`
  margin-top: 10;
  font-size: 17;
  color: #808080;
  text-align: center;
`;

export const CardsContainer =  styled.View`
  flex: 1;
  margin: ${RFPercentage(3)}px;
  margin-top: ${RFPercentage(2)}px;
`;