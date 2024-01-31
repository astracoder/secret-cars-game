const StartGame = ({ startGame }) => {
    return (
        <main className="w-screen h-screen flex justify-center justify-items-center items-center flex-col backdrop-blur-sm bg-black/60
        ">
            {/* <h1 className="text-8xl text-white text-center font-bold drop-shadow-2xl">Secret <span>Cars</span></h1> */}
            <img className="h-1/2 -mb-24" src="/SecretCarsLogo.png" alt="Logo Secret Car" />
            <p className="text-2xl text-blue-300 text-center drop-shadow-2xl">Clique no botão para iniciar o jogo</p>
            <div className="flex justify-center">
                <button onClick={startGame} className="p-3 mt-10 text-2xl text-white rounded-md bg-purple-500 hover:bg-purple-600 transition ease-in-out shadow-2xl">Começar o jogo</button>
            </div>
        </main>
    )
}

export default StartGame;