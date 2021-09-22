import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: var(--nav-height);
  /* transform: translateY(-50%); */
  height: 100vh;
  display: flex;
  align-items: center;

  ${(props: any) =>
    props.$left &&
    css`
      left: -0.5rem;
    `}

  ${(props: any) =>
    props.$right &&
    css`
      right: -0.5rem;
    `}
  ${(props: any) =>
    props.$firstPage &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
  ${(props: any) =>
    props.$lastPage &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}

    @media (min-width: 678px) {
    display: none;
  }

  & > * {
    pointer-events: none;
    transform: translateY(-100%);
  }
`;
