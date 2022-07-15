import styled from "styled-components";

export const Label = styled.h2`
  font-size: 1rem;
`;

export const OptionsList = styled.div`
  display: flex;
  justify-content: stretch;
  gap: 0.8em;
  margin-bottom: 0.8em;

  & > * {
    flex: 1 0 0;
  }
`;

export const FieldsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
