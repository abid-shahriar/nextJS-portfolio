import styled from 'styled-components';

import { Container } from '../../../layouts';
import Typography from '../../Typography';

export const BtnsContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  a {
    background-color: var(--bg-secondary);
    position: relative;
    padding: 1rem 2rem;
    font-family: var(--font-secondary);
    border-radius: 3px;
    transition: 0.15s;

    :hover {
      background-color: var(--hover-bg);
    }

    &:not(:last-child) {
      margin-right: 2rem;
    }

    & > * {
      pointer-events: none;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  a {
    color: whitesmoke;
    transition: 0.15s;

    :hover {
      color: var(--hover);
    }
  }

  svg {
    margin: 0 1rem;
    height: 4rem;
    width: 4rem;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  position: relative;
  isolation: isolate;
`;

export const StyledDesc = styled(Typography)`
  max-width: 80ch;
`;

export const StyledImage = styled.img`
  position: absolute;
  right: 0;
  z-index: -4;
  max-width: 500px;
  height: 100%;
  object-fit: cover;
`;
