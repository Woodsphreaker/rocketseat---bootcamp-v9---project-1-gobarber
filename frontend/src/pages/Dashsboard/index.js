import React from 'react'
import { useHistory } from 'react-router-dom'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import api from '~/services/api'
import { Container, CardsContainer, Card } from './styles'

export default function Dashsboard() {
  const history = useHistory()

  return (
    <>
      <Container>
        <header>
          <button type="button">
            <MdChevronLeft size={36} color="#fff" />
          </button>
          <span>31 de Maio</span>
          <button type="button">
            <MdChevronRight size={36} color="#fff" />
          </button>
        </header>
        <CardsContainer>
          <Card past>
            <strong>08:00</strong>
            <span>Carlo Enrico</span>
          </Card>
          <Card available>
            <strong>08:00</strong>
            <span>Em Aberto</span>
          </Card>
          <Card available>
            <strong>08:00</strong>
            <span>Em Aberto</span>
          </Card>
          <Card available>
            <strong>08:00</strong>
            <span>Em Aberto</span>
          </Card>
          <Card>
            <strong>08:00</strong>
            <span>Carlo Enrico</span>
          </Card>
        </CardsContainer>
      </Container>
    </>
  )
}
