export default function Form({ children, action, method="POST" }) {
    return (
        <form className="flex flex-col" action={action} method={method}>
            {children}
        </form>
    )
}