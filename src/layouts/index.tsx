import styled from 'styled-components';

interface ContainerProps {
  fullWidth?: boolean;
}

export const Container = styled.section<ContainerProps>`
  max-width: ${(props) => (props.fullWidth ? '100%' : '1200px')};
`;
