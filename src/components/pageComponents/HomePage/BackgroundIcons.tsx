import styled from 'styled-components';
import { BsCodeSlash } from 'react-icons/bs';

export default function BackgroundIcons() {
  return (
    <BackgroundIconsContainer>
      <BsCodeSlash />
    </BackgroundIconsContainer>
  );
}

const BackgroundIconsContainer = styled.div`
  position: absolute;
  height: 500px;
  width: 500px;
  top: 50%;
  right: -2rem;
  transform: translateY(-50%);
  pointer-events: none;

  @media (max-width: 678px) {
    height: 400px;
    width: 400px;
  }

  svg {
    height: 100%;
    width: 100%;
    color: rgba(255, 255, 255, 0.05);
  }
`;
