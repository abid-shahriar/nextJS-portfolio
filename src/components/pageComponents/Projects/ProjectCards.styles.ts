import styled, { css } from 'styled-components';

export const BtnsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

export const Description = styled.div`
  margin: 2rem 0;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 3px;
`;

export const ProjectCard = styled.div`
  min-width: 320px;
  width: 31%;
  background-color: var(--bg-secondary);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  overflow: hidden;
  padding: 1rem;
  margin: 1rem;

  @supports (gap: 2rem) {
    margin: 0;
  }

  @media (max-width: 735px) {
    width: 100%;
  }
`;

export const ProjectCardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @supports (gap: 2rem) {
    gap: 2rem;
  }
`;

export const StyledBtn = styled.a`
  padding: 0.4rem 2rem;
  background-color: #191919;
  border-radius: 3px;
  transition: 150ms;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #292929;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`;

export const TechUsed = styled.div`
  margin-top: 1rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;

  span {
    background-color: var(--bg-primary);
    padding: 0.3rem 1rem;
    margin: 0.3rem 0.5rem;
    border-radius: 3px;
    font-size: 1.6rem;
    font-weight: 300;
  }
`;
