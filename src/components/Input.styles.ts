import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/EvilIcons';

export const ViewInput = styled.View`
  background-color: #fff;
  border-radius: 5;
  margin-top: -28;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  width: 80%;
  height: 60;
`

export const TextInput = styled.TextInput`
  flex: 1;
  height: 56;
  background-color: #FFF;
  border-right-color: #EBEBEB;
  color: #666666;
  font-size: 20;
  border-radius: 20;
  margin-left: 7;
`
export const TouchableOpacity = styled.TouchableOpacity`
  background-color: #FFF;
  justify-content: center;
  align-items: center;
  margin-right: 13;
`

export const Search = styled(Icon).attrs({
  name: "search", 
  size: 40,
})`
 color:#B2B2B2;
 align-self: center;
`