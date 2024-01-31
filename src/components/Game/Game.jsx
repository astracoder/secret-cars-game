const StartGame = ({ verifyLetter }) => {
    return (
        <main className="w-screen h-screen flex justify-center flex-col backdrop-blur-sm bg-black/60 game">
            <p className="text-white text-center text-2xl mb-10">Pontuação: <span className="text-xl bg-purple-500 p-2 pt-1 pb-1 rounded-md points">0</span></p>
            <h1 className="text-blue-300 text-center text-5xl mb-5">Advinhe a palavra: </h1>
            <h3 className="text-white text-center text-xl mb-5 tips">Dica sobre a palavra: <span className="text-purple-500">Dica...</span></h3>
            <div className="flex justify-center">
                <div className="w-64 h-24 p-1 text-center border-8 border-blue-300 flex justify-center">
                    <span className="text-purple-900 text-6xl border-8 border-blue-300 bg-white letter">S</span>
                    <span className="text-purple-900 text-6xl border-8 border-blue-300 bg-white letter">U</span>
                    <span className="blankSquare"></span>
                </div>
            </div>
            <div className="letterContainer">
                <p className="text-white text-center text-sm italic mt-5">Tente adivinhar uma letra da palavra: </p>
                <form className="flex justify-center items-center mt-10">
                    <input className="w-10 h-10 text-center text-3xl mr-2 rounded-md" type="text" name="letter" maxLength="1" required/>
                    <button className="p-3 text-2xl text-white rounded-md bg-purple-500 hover:bg-purple-600 transition ease-in-ou">Jogar</button>
                </form>
            </div>
            <div className="text-center text-white wrongLettersContainer">
                <p className="text-blue-200 mt-4">Letras já utilizadas:</p>
                <span className="text-2xl text-gray-900 bg-purple-200 p-1 pt-0 pb-0 rounded-md mr-2">a</span>
                <span className="text-2xl text-gray-900 bg-purple-200 p-1 pt-0 pb-0 rounded-md mr-2">b</span>
                <span className="text-2xl text-gray-900 bg-purple-200 p-1 pt-0 pb-0 rounded-md mr-2">c</span>
            </div>
        </main>
    )
}

export default StartGame;