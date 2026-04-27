import profile from '../assets/profile.jpg'

import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import Form from '../components/Form'
import FormLabel from '../components/FormLabel'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>
            <main>
                <section id="sobre-mim" className="flex flex-row bg-gray-950 h-180 items-center justify-between p-50">
                    <div>
                        <img src={profile} alt="Foto de perfil" className="rounded-xl w-lg h-128"/>
                    </div>
                    <div>
                        <p className="text-white w-200">
                            Olá! Sou Fábio Ezequiel, desenvolvedor fullstack focado em construir aplicações web eficientes e bem estruturadas. Tenho me dedicado ao aprofundamento em tecnologias modernas, com atenção especial à organização de código, boas práticas e arquitetura de sistemas.
                        <br />
                            <br />
                            Busco não apenas fazer funcionar, mas entender como e por que as soluções funcionam — o que me permite evoluir constantemente e criar aplicações mais robustas e escaláveis. Atualmente, estou focado no desenvolvimento web, explorando desde o backend até a experiência do usuário no frontend.
                        </p>
                    </div>
                </section>
                <section id="projetos" className="flex bg-gray-900 h-180 items-center justify-center flex-col gap-10">
                    <h2 className="text-3xl font-bold text-white">Projetos!</h2>
                    <div className='flex flex-row gap-20'>
                        <ProjectCard image={""} title={"Title"} description={"Description"}/>
                        <ProjectCard image={""} title={"Title"} description={"Description"}/>
                        <ProjectCard image={""} title={"Title"} description={"Description"}/>
                    </div>
                    
                </section>
                <section id="artigos" className="flex bg-gray-950 h-180 items-center justify-center">
                    <h2 className="text-3xl font-bold text-white">Artigos!</h2>
                </section>
                <section id="contato" className="flex flex-col bg-gray-900 h-180 items-center justify-center">
                    <h2 className="text-3xl font-bold text-white">Contato!</h2>
                    <div className='flex flex-row justify-between gap-20'>
                        <div>
                            <Form action={"/post"}>
                                <FormLabel name={"Nome"} placeholder={"Digite seu nome"} />
                                <FormLabel name={"E-mail"} placeholder={"Digite seu e-mail"}/>
                            </Form>
                        </div>
                        <div className='text-white'>
                            <img src="" alt="" />
                            <p>LinkedIn</p>
                        </div>    
                    </div>
                </section>
            </main>
            <footer>
                <div className="bg-gray-950 h-30">
                    <p className="text-center text-white py-4">© 2026 Fábio.dev. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    )
}
