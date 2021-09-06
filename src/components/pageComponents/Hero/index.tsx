import styled from 'styled-components';

import { Container } from '../../../layouts';
import Typography from '../../Typography';

export default function HeroSection() {
  return (
    <StyledContainer>
      <InnerLeftContainer>
        <Typography>hello there,</Typography>
        <Typography variant='title' fontFamily='var(--font-secondary)'>
          I&apos;m Abid Shahriar
        </Typography>
        <Typography>
          From Bangladesh. Self-taught creative Frontend Developer with 2+ years of experience. Skilled in designing, developing and testing multiple
          web-based applications incorporating a range of technologies. Aspiring to combine broad background with strong technical skills to excel as
          a Frontend Developer.
        </Typography>
      </InnerLeftContainer>
      <InnerRightContainer></InnerRightContainer>
    </StyledContainer>
  );
}

const InnerLeftContainer = styled.div`
  width: 60%;
`;
const InnerRightContainer = styled.div`
  width: 40%;
`;
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
