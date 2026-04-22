export default function Section({  }) {
    return (
        <section id="sobre-mim" className="flex flex-row bg-gray-950 h-120 items-center justify-center">
            <div>
                <img src={profile} alt="Foto de perfil" className="rounded-full w-32 h-32"/>
            </div>
            <div>
                <p className="text-white">Olá! Meu nome é Fábio Ezequiel, e sou desenvolvedor fullstack.</p>
            </div>
        </section>
    )
}