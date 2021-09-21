import styled from 'styled-components';
import Typography from '../../Typography';

import { ProjectsData } from './static';

export default function ProjectCards() {
  return (
    <ProjectCardsWrapper>
      {ProjectsData.map((project, idx) => (
        <ProjectCard key={idx}>
          <Image src={project.img} alt={project.name} />

          <Typography fontSize='2.4rem' textAlign='center' margin='2rem 0 0 0' fontWeight='500'>
            {project.name}
          </Typography>
          <Typography fontSize='1.6rem' textAlign='center' margin='0rem 0 0 0' fontWeight='300'>
            {project.responsiveness}
          </Typography>

          <TechUsed>
            {project.tech.map((tech, idx) => (
              <span key={idx}>{tech}</span>
            ))}
          </TechUsed>
          <Description> {/* <Typography textAlign='center'>{project.desc}</Typography> */}</Description>
        </ProjectCard>
      ))}
    </ProjectCardsWrapper>
  );
}
const ProjectCard = styled.div`
  min-width: 320px;
  width: 32%;
  background-color: var(--bg-secondary);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2rem;
`;

const ProjectCardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 3px;
`;

const Description = styled.div`
  margin-top: 2rem;
`;

const TechUsed = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  span {
    background-color: var(--bg-primary);
    padding: 0.3rem 1rem;
    margin: 0.3rem 0.5rem;
    border-radius: 3px;
    font-size: 1.6rem;
    font-weight: 300;
  }
`;
