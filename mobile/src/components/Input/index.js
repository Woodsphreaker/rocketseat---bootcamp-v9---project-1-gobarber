import React, { forwardRef } from 'react'
import { Container, Icon, TextInput } from './styles'
import PropTypes from 'prop-types'

const Input = ({ style, iconName, iconSize, ...props }, ref) => {
  return (
    <Container style={style}>
      <Icon iconName={iconName} iconSize={iconSize} />
      <TextInput {...props} ref={ref} />
    </Container>
  )
}

Input.propTypes = {
  style: PropTypes.object,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
}

Input.defaultProps = {
  style: {},
  iconName: '',
  iconSize: 0,
}

export default forwardRef(Input)
