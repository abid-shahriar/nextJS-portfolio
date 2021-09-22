import styled from 'styled-components';

import Typography from '../../Typography';

import { skillsData } from './static';

export default function SkillCards() {
  return (
    <>
      <Typography fontSize='2rem' margin='4rem 0 1rem 0'>
        Here are some of the technologies I have worked with:
      </Typography>

      <SkillCardsWrapper>
        {skillsData.map((skill, idx) => (
          <SkillCard key={idx}>
            <Typography fontSize='2.4rem' textTransform='capitalize' margin='0 0 2rem 0' fontWeight='400'>
              {skill.title}:
            </Typography>

            {skill.skills.map((skillName, idx) => (
              <Typography key={idx}>{skillName}</Typography>
            ))}
          </SkillCard>
        ))}
      </SkillCardsWrapper>
    </>
  );
}

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  background-color: var(--bg-secondary);
  border-radius: 5px;
  min-width: 320px;

  @media (max-width: 735px) {
    min-width: 100%;
  }
`;
const SkillCardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* gap: 2rem; */

  & > * {
    margin-bottom: 2rem;
  }

  @supports (gap: 2rem) {
    gap: 2rem;

    & > * {
      margin-bottom: 0rem;
    }
  }
`;
