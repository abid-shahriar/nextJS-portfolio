import Link from 'next/link';
import { FaGithubAlt, FaEye } from 'react-icons/fa';

import Typography from '../../Typography';

import { ProjectsData } from './static';
import { ProjectCardsWrapper, ProjectCard, Image, Description, TechUsed, BtnsContainer, StyledBtn } from './ProjectCards.styles';

export default function ProjectCards() {
  return (
    <ProjectCardsWrapper>
      {ProjectsData.map((project, idx) => (
        <ProjectCard key={idx}>
          <div>
            <Image src={project.img} alt={project.name} />

            <Typography fontSize='2.4rem' margin='1rem 0 0 0' fontWeight='500'>
              {project.name}
            </Typography>
            <Typography fontSize='1.6rem' margin='0rem 0 0 0' fontWeight='300'>
              {project.responsiveness}
            </Typography>
          </div>
          <Description>
            <Typography>{project.desc}</Typography>
          </Description>

          <TechUsed>
            {project.tech.map((tech, idx) => (
              <span key={idx}>{tech}</span>
            ))}
          </TechUsed>

          <BtnsContainer>
            <Link href={project.code} passHref>
              <StyledBtn target='_blank' rel='noopener noreferrer nofollow' disabled={!project.code}>
                <FaGithubAlt color='white' />
                <Typography margin='0 0 0 1rem'>code</Typography>
              </StyledBtn>
            </Link>
            <Link href={project.demo} passHref>
              <StyledBtn target='_blank' rel='noopener noreferrer nofollow'>
                <FaEye color='white' />
                <Typography margin='0 0 0 1rem'>demo</Typography>
              </StyledBtn>
            </Link>
          </BtnsContainer>
        </ProjectCard>
      ))}
    </ProjectCardsWrapper>
  );
}
