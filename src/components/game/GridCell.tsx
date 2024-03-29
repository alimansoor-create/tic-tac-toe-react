import xMark from "$/assets/x-mark.svg";
import oMark from "$/assets/o-mark.svg";
const mark = { X: xMark, O: oMark };

import { GridSize } from "$/features/grid";
import { Mark } from "$/features/players";
import useStore from "$/store";
import styled, { keyframes } from "styled-components";
import { ReactSVG } from "react-svg";

interface Props {
  rowIdx: number;
  colIdx: number;
  mark: Mark | null;
  match: boolean;
}

const StyledCell = styled.button<{ size: GridSize; match: boolean }>`
  background: transparent;
  border: none;
  padding: 0.8em;

  :not(:nth-of-type(${({ size }) => size}n)) {
    border-right: 3px solid ${({ theme }) => theme.colors.orange[100]};
  }
  :not(:nth-last-of-type(-n + ${({ size }) => size})) {
    border-bottom: 3px solid ${({ theme }) => theme.colors.orange[100]};
  }

  :not(:disabled) {
    cursor: pointer;
  }

  transition: background 200ms ease;
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.orange[300]};
  }

  ${(props) =>
    props.match && `background-color: ${props.theme.colors.orange[100]};`}

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 1.2em;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const StyledSVG = styled(ReactSVG)<{ match: boolean; mark: Mark }>`
  svg {
    width: 100%;
    height: 100%;
    animation: ${fadeIn} 200ms ease;
  }

  path {
    transition: stroke 1s ease;
    ${(props) => {
      if (props.match)
        return `
      stroke: ${props.theme.colors.orange[300]};
    `;
    }}
  }
`;

export default function GridCell(props: Props) {
  const gridSize = useStore((store) => store.gridSize);
  const handleGridCellClick = useStore((store) => store.handleGridCellClick);
  const players = useStore((store) => store.players);
  const currentPlayerIdx = useStore((store) => store.currentPlayerIdx);
  const gameState = useStore((store) => store.gameState);

  const currentPlayer = players[currentPlayerIdx];

  const handleClick = () => {
    handleGridCellClick(props.rowIdx, props.colIdx, currentPlayer.mark);
  };

  return (
    <StyledCell
      size={gridSize}
      onClick={handleClick}
      disabled={
        !!props.mark || gameState.isGameOver || currentPlayer.type === "ai"
      }
      match={props.match}
    >
      {props.mark && (
        <StyledSVG
          src={mark[props.mark]}
          match={+props.match}
          mark={props.mark}
        />
      )}
    </StyledCell>
  );
}
