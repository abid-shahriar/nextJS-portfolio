import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Typography from '../../Typography';

import { NavBar, MenuContainer, ToggleBtn } from './styles';
import { useGlobalState } from '../../../context';

export default function Navbar() {
  const { toggleMenu, setToggleMenu } = useGlobalState();

  function handleToggle() {
    setToggleMenu((prevSate: any) => !prevSate);
  }

  const { pathname } = useRouter();

  useEffect(() => {
    setToggleMenu(false);
  }, [pathname, setToggleMenu]);

  return (
    <NavBar>
      <div>
        <div>
          <Link href='/'>
            <a>
              <Typography>Abid Shahriar</Typography>
            </a>
          </Link>
        </div>
        <ToggleBtn onClick={handleToggle} active={toggleMenu} className='toggle-menu'>
          <div></div>
          <div></div>
          <div></div>
        </ToggleBtn>
        <MenuContainer className={toggleMenu ? '' : 'inactive'}>
          <Link href='/projects'>
            <a>
              <Typography>Projects</Typography>
            </a>
          </Link>
          <Link href='/skills'>
            <a>
              <Typography>Skills</Typography>
            </a>
          </Link>
          <Link href='/contact'>
            <a>
              <Typography>Contact</Typography>
            </a>
          </Link>
        </MenuContainer>
      </div>
    </NavBar>
  );
}
