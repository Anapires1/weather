import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const ViewHome = styled.View`
  flex: 1;
  /* background-color: #fffafa; */
  background-color: #f2f2f2;
`;

export const ViewText = styled.View`
  /* margin-top: 120; */
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20;
  font-weight: bold;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 50;
  align-items: flex-end;
  width: ${RFValue(50)};
  margin-bottom: ${RFValue(8)};
  margin-left: ${RFValue(8)};
  height: ${RFValue(50)};
  align-items: center;
  justify-content: center;
  background-color: #add8e6;
`;

export const CardsContainerHome = styled.View`
  flex: 1;
  margin: ${RFPercentage(3)}px;
  margin-top: ${RFPercentage(2)}px;
`;
export const CardsScroll = styled.ScrollView`
  flex: 1;
`;
