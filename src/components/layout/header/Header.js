import React from 'react'
import './header.css';
import { Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <div className='Header_container'>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Iniciar sesión</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Crear usuario</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Cerrar sesión
          </Nav.Link>
        </Nav.Item>
      </Nav>
  </div>
  )
}

export default Header