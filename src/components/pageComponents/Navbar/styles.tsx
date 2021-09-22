import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;

  @media (max-width: 678px) {
    background-color: var(--bg-blur);
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    z-index: -1;
    transition: 0.25s;
    height: 175px;
    overflow: hidden;
    margin-top: calc(var(--nav-height));
    border-bottom: 1px solid whitesmoke;

    &.inactive {
      height: 0;
    }

    & > * {
      margin: 2rem 0;
    }
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  min-height: var(--nav-height);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: var(--bg-primary);

  @media (max-width: 678px) {
    --nav-height: 50px;
  }

  & > div {
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 678px) {
      flex-direction: row-reverse;
    }
  }

  a {
    text-decoration: none;
    color: var(--color-primary);
    transition: 0.15s;
    font-family: var(--font-secondary);
    font-size: 2rem;

    &:not(:last-child) {
      margin-right: 4rem;
    }

    & > * {
      pointer-events: none;
    }

    :hover {
      & * {
        color: #f5f5f5b9;
      }
    }
  }
`;

export const ToggleBtn = styled.div`
  position: absolute;
  left: 5%;
  display: none;

  & > * {
    height: 3px;
    width: 40px;
    background-color: whitesmoke;
    pointer-events: none;
    border-radius: 50px;
    transition: 0.25s;

    &:not(:last-child) {
      margin-bottom: 8px;
    }

    &:nth-child(2) {
      width: 30px;
    }

    ${(props) =>
      props.active &&
      css`
        &:not(:nth-child(2)) {
          width: 30px;
        }

        &:nth-child(2) {
          width: 40px;
        }
      `}
  }

  @media (max-width: 678px) {
    display: block;
  }
`;
