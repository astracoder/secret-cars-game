import { useState, useRef } from 'react';

const StartGame = ({ 
    verifyLetter, 
    pickedBrand, 
    letters, 
    guessedLetters, 
    wrongLetters, 
    chances,        
    score 
    }) => {
    const [letter, setLetter] = useState('');
    const refInput = useRef(null);

    const clearAndFocus = () => {
        setLetter('');
        refInput.current.focus();
    }

    const transformLetterUpperCase = () => {
        return letter.toUpperCase();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const letterUpper = transformLetterUpperCase();
        verifyLetter(letterUpper);
        clearAndFocus();
    };

    return (
        <main className="bg-game bg-cover bg-center">
            <section className="w-screen h-screen flex justify-center items-center flex-col backdrop-blur-sm bg-black/80">
                {score <= 0 ? (
                    <p className="text-white text-center text-2xl mb-10">Pontuação: <span className="text-xl p-2 pt-1 pb-1 border-2 border-purple-500 rounded-md points">{score}</span></p>
                ) : (
                    <p className="text-white text-center text-2xl mb-10">Pontuação: <span className="text-xl bg-purple-500 p-2 pt-1 pb-1 rounded-md points">{score} points</span></p>
                )}
                <h1 className="text-blue-300 text-center text-5xl mb-5">Advinhe a palavra: </h1>
                <h3 className="text-white text-center text-xl mb-5 tips">Dica sobre a palavra: <span className="text-purple-400 underline">{pickedBrand}</span></h3>
                <p className="text-green-300 text-center text-xl mb-5 bg-white/10 w-96 rounded-md">Você ainda tem <span className="text-green-500 underline">{chances}</span> tentativas!</p>
                <div className="flex justify-center">
                    <div className="w-auto p-2 text-center border-8 border-blue-300 rounded-lg flex justify-center">
                        {letters.map((l, i) => (
                            guessedLetters.includes(l) ? (
                                <span key={i} className="w-20 h-20 text-white text-6xl font-bold border-8 border-green-300 rounded-lgbg-black/30 flex justify-center items-center letter">{l}</span>
                            ) : (
                                <span key={i} className="w-20 h-20 text-purple-900 text-6xl font-bold border-8 border-black/95 bg-white"></span>
                            )
                        ))}
                    </div>
                </div>
                <div className="letterContainer">
                    <p className="text-white text-center text-sm italic mt-5">Tente adivinhar uma letra da palavra: </p>
                    <form onSubmit={handleSubmit} className="flex justify-center items-center mt-5">
                        <input 
                            onChange={(e) => setLetter(e.target.value)} 
                            className="w-14 h-14 text-gray-700 font-bold text-center text-3xl mr-2 rounded-md uppercase" 
                            type="text" 
                            name="letter" 
                            maxLength="1" 
                            required
                            value={letter}
                            ref={refInput}
                        />
                        <button className="p-3 text-2xl text-white rounded-md bg-green-500 hover:bg-green-600 transition ease-in-ou">Jogar</button>
                    </form>
                </div>
                <div className="text-center text-white wrongLettersContainer">
                    <p className="text-blue-200 mt-4 mb-2">Letras já utilizadas:</p>
                    {wrongLetters.map((l, i) => (
                        <span key={i} className="text-2xl text-gray-900 bg-red-200 p-1 pt-0 pb-0 rounded-md mr-2">{l}</span>
                    ))}
                </div>
            </section>
        </main>
        
    )
}

export default StartGame;