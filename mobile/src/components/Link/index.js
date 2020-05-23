import React from 'react'

import PropTypes from 'prop-types'

import { LinkContainer, LinkText } from './styles'

const Link = ({ style, children, onPress, ...props }) => {
  return (
    <LinkContainer onPress={onPress}>
      <LinkText style={style}>{children}</LinkText>
    </LinkContainer>
  )
}

export default Link

Link.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func,
}

Link.defaultProps = {
  style: {},
  onPress: () => {},
}
