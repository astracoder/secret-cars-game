const StartGame = ({ retryStage, score }) => {
    return (
        <main className="w-screen h-screen flex justify-center justify-items-center flex-col backdrop-blur-sm bg-black/60
        ">
            <h1 className="text-8xl text-white text-center font-bold mb-5">Fim de jogo!</h1>
            <p className="text-3xl text-blue-300 text-center font-semibold mb-5">Pontuação total:</p>
            <div className="flex justify-center">
                <p className="border-r-4 border-b-4 border-blue-300 text-white font-bold text-3xl bg-purple-500 p-2 pt-1 pb-1 rounded-full w-20 h-20 flex justify-center items-center">{score}</p>
            </div>
            <div className="flex justify-center">
                <button onClick={retryStage} className="p-3 mt-10 text-2xl text-white rounded-md bg-rose-500 hover:bg-rose-600 transition ease-in-out">Jogar novamente!</button>
            </div>
        </main>
    )
}

export default StartGame;