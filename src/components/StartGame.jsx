const StartGame = () => {
    return (
        <main className="w-screen h-screen flex justify-center justify-items-center flex-col">
            <h1 className="text-9xl text-center font-bold">Secret Cars Game</h1>
            <p className="text-5xl text-center font-semibold">Clique no botão para iniciar o jogo</p>
            <div className="">
                <button className="text-4xl bg-red-600 rounded-md">Começar o jogo</button>
            </div>
        </main>
    )
}

export default StartGame;