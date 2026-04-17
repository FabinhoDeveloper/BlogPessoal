export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between items-center p-4 bg-gray-900 w-full">
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
    )   
}