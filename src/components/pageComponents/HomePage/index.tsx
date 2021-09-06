import Typography from '../../Typography';
import BackgroundIcons from './BackgroundIcons';
import HomeButtons from './HomeButtons';
import SocialIcons from './SocialIcons';

import { StyledDesc, StyledContainer } from './styles';

export default function HeroSection() {
  return (
    <StyledContainer>
      <Typography>hello there,</Typography>
      <Typography variant='title' fontFamily='var(--font-secondary)' fontSize='3.5rem' margin='1rem 0 2rem 0'>
        I&apos;m Abid Shahriar
      </Typography>
      <StyledDesc margin='0 0 4rem 0'>
        From Bangladesh. Self-taught creative Frontend Developer with 2+ years of experience. Skilled in designing, developing and testing multiple
        web-based applications incorporating a range of technologies. Aspiring to combine broad background with strong technical skills to excel as a
        Frontend Developer.
      </StyledDesc>

      <SocialIcons />

      <HomeButtons />

      <BackgroundIcons />
    </StyledContainer>
  );
}
