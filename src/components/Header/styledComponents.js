import styled from 'styled-components'

export const NavHeader = styled.nav`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  border: 1px solid white;
  border-radius: 5px;
`

export const LogoTitle = styled.h1`
  color: white;
`

export const LogoSpan = styled.span`
  display: block;
  margin-block: 5px;
  font-size: 1.1rem;
`

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  gap: 0.6em;
  padding: 0.5em;
  color: #223a5f;
  background-color: white;
  border-radius: 5px;
  width: 100px;
`
export const Score = styled.p`
  font-weight: 600;
  font-size: 1.7rem;
  font-family: 'Roboto';
`
