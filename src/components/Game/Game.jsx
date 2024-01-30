const StartGame = ({ verifyLetter }) => {
    return (
        <main className="w-screen h-screen flex justify-center justify-items-center flex-col backdrop-blur-sm bg-black/60
        ">
            <h1 className="text-8xl text-white text-center font-bold">Estamos dentro do jogo</h1>
            <p className="text-3xl text-blue-300 text-center font-semibold">Clique no botão para iniciar o jogo</p>
            <div className="flex justify-center">
                <button onClick={verifyLetter} className="p-3 mt-10 text-2xl text-white rounded-md bg-purple-500 hover:bg-purple-600 transition ease-in-out">Finalizar jogo</button>
            </div>
        </main>
    )
}

export default StartGame;