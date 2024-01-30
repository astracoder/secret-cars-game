import { carsList } from './data/cars.js';
import { useCallback, useEffect, useState } from 'react';

import StartGame from './components/StartGame/StartGame.jsx';
import Game from './components/Game/Game.jsx';
import EndGame from './components/EndGame/EndGame.jsx';

const stages = [
    {id: 1, name: 'start'},
    {id: 2, name: 'ingame'},
    {id: 3, name: 'end'}
]

const App = () => {
    const [gameStage, setGameStage] = useState(stages[0].name);
    const [cars] = useState(carsList);

    const startGame = () => {
        setGameStage(stages[1].name);
    }

    const verifyLetter = () => {
        setGameStage(stages[2].name)
    }

    const retryStage = () => {
        setGameStage(stages[0].name)
    }

    return (
        <>
            {gameStage === 'start' && <StartGame startGame={startGame}/>}
            {gameStage === 'ingame' && <Game verifyLetter={verifyLetter}/>}
            {gameStage === 'end' && <EndGame retryStage={retryStage}/>}
        </>
    )
}

export default App;