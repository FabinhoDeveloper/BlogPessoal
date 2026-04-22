export default function FormLabel({ name, placeholder }) {
    return (
        <div>
            <label for="nome">{name}: </label>
            <input type="text" name="nome" id="" placeholder={placeholder}/>
        </div>
    )
}