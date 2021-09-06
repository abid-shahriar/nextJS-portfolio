import styled from 'styled-components';

interface ContainerProps {
  fullWidth?: boolean;
}

export const Container = styled.section<ContainerProps>`
  max-width: 90%;
  margin: 0 auto;
  margin-top: var(--nav-height);
  padding: 10rem 0;

  @media (max-width: 678px) {
    padding: 5rem 0;
    padding-bottom: 10rem;
  }
`;
