export default function Form({ children, action, method="POST" }) {
    return (
        <form className="flex flex-col gap-5" action={action} method={method}>
            {children}
        </form>
    )
}