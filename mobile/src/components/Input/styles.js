import styled from 'styled-components/native'
import VectorIcon from 'react-native-vector-icons/MaterialIcons'

export const Container = styled.View`
  flex-direction: row;
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  align-items: center;
  margin-top: 10px;
`

export const Icon = styled(VectorIcon).attrs((props) => {
  return {
    size: props.iconSize || 26,
    name: props.iconName || 'call',
  }
})`
  color: ${(props) => props.color || 'rgba(255, 255, 255, 0.8)'};
`

export const TextInput = styled.TextInput.attrs((props) => {
  return {
    placeholderTextColor: 'rgba(255,255,255,0.3)',
  }
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`
