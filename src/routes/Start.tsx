import { Link } from "react-router-dom";
import styled from "styled-components";
import Attribution from "$/components/start/Attribution";

import oDesktop from "$/assets/o-desktop-orange.svg";
import xDesktop from "$/assets/x-desktop-orange.svg";
import oMobile from "$/assets/o-mobile-orange.svg";
import xMobile from "$/assets/x-mobile-orange.svg";

const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue[200]};
  display: grid;
  place-content: center;
  grid-template-rows: 1fr auto 1fr;
  background-image: url(${xMobile}), url(${oMobile});
  background-repeat: no-repeat;
  /* background-position: top calc(-100px + 10vw) left calc(-100px + 10vw),
    top calc(-100px + 10vw) right calc(-100px + 10vw); */
  background-position: top -50px left -50px, top -50px right -50px;
  padding-block: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    background-image: url(${xDesktop}), url(${oDesktop});
    background-position: top -200px left -200px, bottom -200px right -200px;
  }
`;

export default function Start() {
  return (
    <Container>
      <Attribution />
    </Container>
  );
}
