export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <nav className="flex flex-row justify-between items-center p-4 bg-amber-800 w-full">
                    <div>
                        <h1 className="text-white text-2xl font-bold">Fábio.dev</h1>
                    </div>
                    <div className="flex flex-row text-white gap-10">
                        <a className="color-white" href="#sobre-mim">Sobre mim</a>
                        <a href="#projetos">Projetos</a>
                        <a href="#artigos">Artigos</a>
                        <a href="#contato">Contato</a>
                    </div>
                </nav>
            </header>
            <main>
                <section id="sobre-mim" className="flex bg-gray-950 h-120 items-center justify-center">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>

                    </div>
                    <h2 className="text-3xl font-bold text-white">Sobre mim!</h2>
                </section>
                <section id="projetos" className="flex bg-gray-900 h-120 items-center justify-center">
                    <h2 className="text-3xl font-bold text-white">Projetos!</h2>
                </section>
                <section id="artigos" className="flex bg-amber-400 h-120 items-center justify-center">
                    <h2 className="text-3xl font-bold text-white">Artigos!</h2>
                </section>
                <section id="contato" className="flex bg-amber-500 h-120 items-center justify-center">
                    <div>
                        <form action="">
                            <label for="nome">Nome:</label>
                            <input type="text" name="nome" id="" />
                        </form>
                    </div>
                    <div>
                        <p>LinkedIn</p>
                    </div>
                </section>
            </main>
            <footer>
                <div className="bg-gray-900 h-30">
                    <p className="text-center text-white py-4">© 2024 Fábio.dev. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    )
}
