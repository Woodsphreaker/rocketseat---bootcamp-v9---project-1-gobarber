import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export default styled(LinearGradient).attrs((props) => {
  const colors = props.colors || ['#4c669f', '#192f6a']

  return {
    colors,
  }
})`
  ${(props) => props.flexSize && `flex: ${props.flexSize}`}
`
