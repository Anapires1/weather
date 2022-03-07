import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/EvilIcons';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.backgroundCard};
  border-radius: 5;
  margin-bottom: ${RFPercentage(2)}px;
`;
export const TextClear = styled.Text`
  font-size: 25;
  color: ${({theme}) => theme.colors.title};
  font-weight: bold;
`;

export const IconTrash = styled(Icon).attrs({
  name: 'trash',
})`
  font-size: 40;
`;

export const ContainerAdd = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundCard};
  border-radius: 5;
  margin-bottom: ${RFPercentage(2)}px;
`;
export const Add = styled.TouchableOpacity`
  margin-top: ${RFPercentage(2)}px;
  margin-bottom: ${RFPercentage(2)}px;
`;
export const Title = styled.Text`
  margin-top: ${RFPercentage(2)}px;
  font-size: 22;
  color: ${({theme}) => theme.colors.title};
  font-weight: bold;
  margin-left: ${RFPercentage(1)}px;
`;

export const Grau = styled.Text`
  margin-top: ${RFPercentage(2)}px;
  font-weight: bold;
  font-size: 25;
  color: ${({theme}) => theme.colors.secondary};
  /* margin-left: ${RFPercentage(18)}px; */
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-size: 15;
  margin-left: ${RFPercentage(0.6)}px;
`;

export const Forecast = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-weight: bold;
  font-size: 16;
  margin-top: ${RFPercentage(2)}px;
  margin-left: ${RFPercentage(0.6)}px;
`;

export const Variation = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-size: 16;
  /* font-weight: bold; */
  margin-left: ${RFPercentage(0.6)}px;
  margin-bottom: ${RFPercentage(2)}px;
`;

export const Clear = styled.TouchableOpacity`
  font-size: 15;
  margin-top: ${RFPercentage(4)}px;
  margin-right: ${RFPercentage(2)}px;
`;

export const ViewCard = styled.View`
  flex-direction: row;
`;
export const ViewText = styled.View`
  flex: 1;
`;
export const TextAdd = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: 16;
  font-weight: bold;
  margin-left: ${RFPercentage(0.9)}px;
`;
export const ViewContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
