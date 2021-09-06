import React, { useEffect } from 'react';

import Navbar from '../components/pageComponents/Navbar';
import { useGlobalState } from '../context';

export default function RootLayout(props: any) {
  const { setToggleMenu } = useGlobalState();

  useEffect(() => {
    document.body.addEventListener('click', (e: any) => {
      if (!e.target.classList.contains('toggle-menu')) {
        setToggleMenu(false);
      }
    });
  });

  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
