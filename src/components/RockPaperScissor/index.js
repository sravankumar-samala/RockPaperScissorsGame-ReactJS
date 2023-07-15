import {useState, useEffect} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  MainAppContainer,
  GameContainer,
  GameWrapper,
  GameChoices,
  GameResult,
  GameResults,
  ChoiceButton,
  ResetButton,
  ResultText,
  RulesButton,
} from './styledComponents'
import Header from '../Header'

import 'reactjs-popup/dist/index.css'

export default function RockPaperScissors({choicesList}) {
  const [score, setScore] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [choices, setChoices] = useState({
    playerChoice: null,
    opponentChoice: null,
  })

  const onSelect = playerChoice => {
    const randomChoice = Math.floor(Math.random() * choicesList.length)
    setChoices({playerChoice, opponentChoice: choicesList[randomChoice]})
    setPlaying(false)
  }

  const onReset = () => {
    setChoices({playerChoice: null, opponentChoice: null})
    setPlaying(true)
    setScore(0)
  }

  return (
    <MainAppContainer>
      <Header score={score} />
      {playing ? (
        <GamePlayingView choicesList={choicesList} onSelect={onSelect} />
      ) : (
        <GameResultsView
          choices={choices}
          reset={onReset}
          setScore={setScore}
        />
      )}

      {/* --------- React Popup for Rules ----------*/}
      <Popup
        trigger={<RulesButton>RULES</RulesButton>}
        modal
        closeOnDocumentClick
        contentStyle={{maxWidth: '100%'}}
        overlayStyle={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className="custom-popup-container"
        overlayClassName="custom-popup-overlay"
        closeOnEscape
      >
        {close => (
          <div>
            <RiCloseLine className="close" onClick={close} />
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </div>
        )}
      </Popup>
    </MainAppContainer>
  )
}

function GamePlayingView({choicesList, onSelect}) {
  return (
    <GameContainer>
      <GameWrapper>
        {choicesList.map(each => (
          <SelectButton
            key={each.id}
            onSelect={onSelect}
            choiceDetails={each}
          />
        ))}
      </GameWrapper>
    </GameContainer>
  )
}

function GameResultsView({choices, reset, setScore}) {
  const getGameResult = () => {
    const {playerChoice, opponentChoice} = choices
    const [rock, paper, scissors] = ['ROCK', 'PAPER', 'SCISSORS']

    if (playerChoice.id === opponentChoice.id) return 'IT IS DRAW'

    if (
      (playerChoice.id === rock && opponentChoice.id === scissors) ||
      (playerChoice.id === scissors && opponentChoice.id === paper) ||
      (playerChoice.id === paper && opponentChoice.id === rock)
    )
      return 'YOU WON'
    return 'YOU LOSE'
  }

  useEffect(() => {
    const result = getGameResult()
    if (result === 'YOU WON') {
      setScore(prev => prev + 1)
    } else if (result === 'YOU LOSE') {
      setScore(prev => prev - 1)
    } else setScore(prev => prev)
  }, [])

  return (
    <GameContainer>
      <GameResults>
        <GameChoices>
          <img
            style={{maxWidth: '140px'}}
            src={choices.playerChoice.imageUrl}
            alt="your choice"
          />
          <img
            style={{maxWidth: '140px'}}
            src={choices.opponentChoice.imageUrl}
            alt="opponent choice"
          />
        </GameChoices>
        <GameResult>
          <ResultText>{getGameResult()}</ResultText>
          <ResetButton type="button" onClick={reset}>
            PLAY AGAIN
          </ResetButton>
        </GameResult>
      </GameResults>
    </GameContainer>
  )
}

function SelectButton({choiceDetails, onSelect}) {
  return (
    <ChoiceButton
      type="button"
      onClick={() => onSelect(choiceDetails)}
      isLastChild={choiceDetails.id === 'PAPER'}
      data-testid={`${choiceDetails.id.toLowerCase()}Button`}
    >
      <img src={choiceDetails.imageUrl} alt={choiceDetails.id} />
    </ChoiceButton>
  )
}
