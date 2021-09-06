import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Typography from '../../Typography';

export default function index() {
  return (
    <NavBar>
      <div>
        <Link href='/'>
          <a>
            <Typography>logo</Typography>
          </a>
        </Link>
      </div>
      <MenuContainer>
        <Link href='#projects'>
          <a>
            <Typography>Projects</Typography>
          </a>
        </Link>
        <Link href='#skills'>
          <a>
            <Typography>Skills</Typography>
          </a>
        </Link>
        <Link href='#contact'>
          <a>
            <Typography>Contact</Typography>
          </a>
        </Link>
      </MenuContainer>
    </NavBar>
  );
}

const MenuContainer = styled.div`
  display: flex;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-height);

  a {
    padding: 0 4rem;
    color: var(--color-primary);
    text-decoration: none;

    & > * {
      pointer-events: none;
    }
  }
`;
