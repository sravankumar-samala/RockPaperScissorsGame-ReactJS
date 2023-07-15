import styled from 'styled-components'

export const MainAppContainer = styled.div`
  min-height: 100vh;
  padding: 1em 2em 3em;
  background-color: #223a5f;
  display: grid;
  grid-template-rows: auto 1fr auto;
`
export const ChoiceButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  max-width: 160px;
  ${props => props.isLastChild && 'grid-column: 1/ -1'};
  cursor: pointer;
`

export const GameContainer = styled.div`
  padding-block: 2em;
  display: grid;
  place-items: center;
`
export const GameWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  place-content: center;
`

export const RulesButton = styled(ChoiceButton)`
  padding: 0.5em 1.2em;
  background-color: lightgrey;
  border-radius: 0.3em;
  margin-left: auto;
`
export const GameResults = styled.div`
  width: min(100%, 400px);
`

export const GameChoices = styled.div`
  //   width: min(100%, 500px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`
export const GameResult = styled.div`
  display: grid;
  place-items: center;
`
export const ResultText = styled.p`
  font-weight: bold;
  font-size: 1.7rem;
  color: white;
  margin-block: 1em;
`

export const ResetButton = styled(RulesButton)`
  margin-inline: auto;
  font-size: 1.2rem;
  padding-inline: 1.4em;
`
