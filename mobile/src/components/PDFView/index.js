import React from 'react'
import { Container, PDF } from './styles'
import PropTypes from 'prop-types'

const PDFView = ({ source }) => {
  return (
    <Container>
      <PDF source={source} />
    </Container>
  )
}

PDFView.propTypes = {
  source: PropTypes.string.isRequired,
}

export default PDFView
