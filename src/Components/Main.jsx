import { useState } from 'react';
function Main(props) {
        // Crea una variabile di stato 'click' inizializzata come stringa vuota
    // setClick è la funzione per aggiornare lo stato 'click'
    const [click, setClick] = useState("");
    const { languages } = props;
    return (
        <main>
            <div className="languages">
                {
                    languages.map((element) => {
                        const { id, title, description } = element;
                        const clickon = () => { setClick(description) };
                        return (<button key={id} onClick={clickon}>{title}</button>)
                    })
                }
            </div>
            <div className="description">
                
                    <p>{click}</p>
                
            </div>
        </main>
    )
}
export default Main;