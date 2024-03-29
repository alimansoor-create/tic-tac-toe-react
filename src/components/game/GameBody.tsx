import { selectPlayers } from "$/features/players";
import useStore from "$/store";
import styled from "styled-components";
import CurrentPlayer from "./CurrentPlayer";
import Grid from "./Grid";
import PlayerDisplay from "./PlayerDisplay";
import Result from "./Result";
import Score from "./Score";

const Wrapper = styled.main`
  padding: 1.6rem;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 2em;
  }
`;
const Container = styled.div`
  width: min(100%, 20em);
  display: grid;
  justify-items: center;
  align-items: center;
  row-gap: 1.6rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template:
      ". score ." auto
      "player1 grid player2" auto
      ". current ." auto / 1fr auto 1fr;
    column-gap: 4em;
    row-gap: 2rem;
    width: min(100%, 70em);
  }
`;

const PlayersContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: stretch;
  gap: 3em;
  & > * {
    flex: 1 0 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: contents;
  }
`;
const Player1Display = styled(PlayerDisplay)`
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    justify-self: stretch;
    grid-area: player1;
  }
`;
const Player2Display = styled(PlayerDisplay)`
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    justify-self: stretch;
    grid-area: player2;
  }
`;

export default function GameBody() {
  const { players } = useStore(selectPlayers);
  const gameState = useStore((store) => store.gameState);

  return (
    <Wrapper>
      <Container>
        <Score />
        <Grid />
        <PlayersContainer>
          <Player1Display player={players[0]} />
          <Player2Display player={players[1]} />
        </PlayersContainer>
        <CurrentPlayer />
        {gameState.isGameOver && <Result />}
      </Container>
    </Wrapper>
  );
}
