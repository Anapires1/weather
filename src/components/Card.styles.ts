import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #FFF;
  border-radius: 5;
  margin-bottom: ${RFPercentage(2)}px;
`
export const ContainerAdd = styled.View`
  background-color: #FFF;
  border-radius: 5;
  margin-bottom: ${RFPercentage(2)}px;
`
export const Add = styled.TouchableOpacity`
  margin-top: ${RFPercentage(2)}px;
  margin-bottom: ${RFPercentage(2)}px;
`
export const Title = styled.Text`
  margin-top: ${RFPercentage(2)}px;
  font-size: 25;
  color: #000;
  font-weight: bold;
`

export const Grau = styled.Text`
  margin-top: ${RFPercentage(2)}px;
  font-weight: bold;
  font-size: 30;
  color: #ff7f50;
  margin-left: ${RFPercentage(18)}px;
`

export const SubTitle = styled.Text`
  color: #000;
  font-size: 15;
  margin-left: ${RFPercentage(0.6)}px;
  `

export const Forecast = styled.Text`
  color: #ff7f50;
  font-weight: bold;
  font-size: 16;
  margin-top: ${RFPercentage(2)}px;
  margin-left: ${RFPercentage(0.6)}px;
`

export const Variation = styled.Text`
  color: #000;
  font-size: 16;
  font-weight: bold;
  margin-left: ${RFPercentage(0.6)}px;
  margin-bottom: ${RFPercentage(2)}px;
  
`

export const Favorite = styled.Text`
  color: red;
  font-size: 15;
  margin-top: ${RFPercentage(4)}px;
  margin-left: ${RFPercentage(30)}px;
  margin-right: ${RFPercentage(4)}px;
`

export const ViewCard = styled.View`
  flex-direction: row;
`
export const ViewText = styled.View`
  flex: 1;
`
export const TextAdd = styled.Text`
  color: #87cefa;
  font-size: 16;
  font-weight: bold;
  margin-left: ${RFPercentage(0.9)}px;
`

