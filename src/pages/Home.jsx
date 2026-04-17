import profile from '../assets/profile.jpg'

import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>
            <main>
                <section id="sobre-mim" className="flex flex-row bg-gray-950 h-120 items-center justify-center">
                    <div>
                        <img src={profile} alt="Foto de perfil" className="rounded-full w-32 h-32"/>
                    </div>
                    <div>
                        <p className="text-white">Olá! Meu nome é Fábio Ezequiel, e sou desenvolvedor fullstack.</p>
                    </div>
                </section>
                <section id="projetos" className="flex bg-gray-900 h-120 items-center justify-center">
                    <h2 className="text-3xl font-bold text-white">Projetos!</h2>

                </section>
                <section id="artigos" className="flex bg-gray-950 h-120 items-center justify-center">
                    <h2 className="text-3xl font-bold text-white">Artigos!</h2>
                </section>
                <section id="contato" className="flex bg-gray-900 h-120 items-center justify-center">
                    <div>
                        <form action="">
                            <label for="nome">Nome:</label>
                            <input type="text" name="nome" id="" />
                        </form>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>LinkedIn</p>
                    </div>
                </section>
            </main>
            <footer>
                <div className="bg-gray-950 h-30">
                    <p className="text-center text-white py-4">© 2024 Fábio.dev. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    )
}
