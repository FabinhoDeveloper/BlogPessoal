export default function FormLabel({ name, placeholder }) {
    return (
        <div className="flex flex-col">
            <label className='text-white' for="nome">{name}:</label>
            <input placeholder={placeholder} className='border border-white rounded-xl w-150 h-10 text-white' type="text" name="nome" id=""/>
        </div>
    )
}