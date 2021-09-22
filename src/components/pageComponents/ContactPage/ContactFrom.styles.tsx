import styled from 'styled-components';

export const ContactFromWrapper = styled.div`
  margin-top: 4rem;
`;

export const Form = styled.form`
  max-width: 900px;
  margin: 0 auto;
  background-color: var(--bg-secondary);
  padding: 2rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  outline: none;
  border: none;
  border-radius: 3px;
  font-family: inherit;
  font-size: 1.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: whitesmoke;

  &::-webkit-input-placeholder {
    font-size: 1.8rem;
    opacity: 0.5;
    color: white;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 2rem;
  border: none;
  padding: 1rem;
  border-radius: 3px;
  font-size: 1.8rem;
  color: whitesmoke;
  background-color: var(--bg-secondary);
  border: 1px solid rgba(238, 238, 238, 0.4);
  transition: 150ms;
  cursor: pointer;

  :hover {
    background-color: var(--hover-bg);
  }

  :disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  & > * {
    pointer-events: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  height: 200px;
  outline: none;
  border: none;
  border-radius: 3px;
  font-family: inherit;
  font-size: 1.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: whitesmoke;

  &::-webkit-input-placeholder {
    font-size: 1.8rem;
    opacity: 0.5;
    color: white;
  }

  @media (max-width: 500px) {
    height: 150px;
  }
`;
