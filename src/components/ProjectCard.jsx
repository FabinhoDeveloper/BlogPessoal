import Profile from '../assets/profile.jpg'

export default function ProjectCard({ image, title, description }) {
    return (
        <div className='h-100 w-80 rounded-xl bg-gray-600 hover:bg-gray-700 cursor-pointer: text-white p-10 justify-center items-center flex flex-col'>
            <img src={Profile} alt={"image"} className='w-4/5'/>
            <h1 className='text-bold'>{title}</h1>
            <p>{description}</p>
        </div>
    )
}