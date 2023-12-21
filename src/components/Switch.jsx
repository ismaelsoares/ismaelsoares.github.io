export const Switch = () => {
    const toggleMode = () => {
        const html = document.documentElement;
        html.classList.toggle("light");

    }

    return (
        <div id="switch" onClick={toggleMode}>
            <button></button>
            <span></span>
        </div>
    )
}
