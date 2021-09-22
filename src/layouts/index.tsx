import styled from 'styled-components';

interface ContainerProps {
  fullWidth?: boolean;
}

export const Container = styled.section<ContainerProps>`
  max-width: 85%;
  margin: 0 auto;
  margin-top: var(--nav-height);
  padding: 10rem 0;
  position: relative;
  /* animation: fadeIn 0.5s ease-in; */

  @media (max-width: 678px) {
    padding: 5rem 0;
    padding-bottom: 10rem;
  }

  /* @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(4rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  } */
`;
