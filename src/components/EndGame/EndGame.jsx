const StartGame = ({ retryStage, score }) => {
    const finalPhrases = ['Meu Deus,o que foi isso?', 'Muito bom, você foi bem!'];
    return (
        <main className="bg-end-game bg-cover bg-center">
            <section className="w-screen h-screen flex justify-center justify-items-center flex-col backdrop-blur-sm bg-black/80">
                <h1 className="text-8xl text-white text-center font-bold mb-5">Fim de jogo!</h1>
                <p className="text-3xl text-blue-300 text-center font-semibold mb-5">Pontuação total:</p>
                <div className="flex justify-center">
                    {score <= 0 ? (
                        <div className="flex justify-center items-center flex-col">
                            <p className="mb-5 border-t-4 border-b-4 border-blue-300 text-white font-bold text-3xl bg-black-0 p-2 pt-1 pb-1 rounded-full w-20 h-20 flex justify-center items-center">🤣</p>
                            <p class="text-xl text-red-500">{finalPhrases[0]}</p>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center flex-col">
                            <p className="mb-5 border-r-4 border-l-4 border-green-300 text-white font-bold text-3xl bg-black-0 p-2 pt-1 pb-1 rounded-full w-40 h-32 flex justify-center items-center text-center">{score} points</p>
                            <p className="text-xl text-green-500">{finalPhrases[1]}</p>
                        </div>
                    )}
                </div>
                <div className="flex justify-center">
                    <button onClick={retryStage} className="p-3 mt-10 text-2xl text-white rounded-md bg-rose-500 hover:bg-rose-600 transition ease-in-out">Jogar novamente!</button>
                </div>
            </section>
        </main>

    )
}

export default StartGame;