import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Content, Profile } from './styles'

import logo from '~/assets/img/logo-purple.svg'

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dash">DASH</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Woods</strong>
              <Link to="/profile">Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Woods"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
