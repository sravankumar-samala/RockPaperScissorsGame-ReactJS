import {
  NavHeader,
  LogoTitle,
  LogoSpan,
  ScoreContainer,
  Score,
} from './styledComponents'

export default function Header({score}) {
  return (
    <NavHeader>
      <LogoTitle>
        <LogoSpan>ROCK</LogoSpan>
        <LogoSpan>PAPER</LogoSpan>
        <LogoSpan>SCISSORS</LogoSpan>
      </LogoTitle>
      <ScoreContainer>
        <p style={{fontWeight: 'bold', fontSize: '1.1rem'}}>Score</p>
        <Score>{score}</Score>
      </ScoreContainer>
    </NavHeader>
  )
}
