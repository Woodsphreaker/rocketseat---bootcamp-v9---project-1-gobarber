import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Content, Profile } from './styles'

import Notifications from '~/components/Notifications'

import logo from '~/assets/img/logo-purple.svg'

export default function Header() {
  const { name, email, avatar } = useSelector((state) => state.User.profile)

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dash">DASH</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{name}</strong>
              <Link to="/profile">Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt={name}
              title={name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
