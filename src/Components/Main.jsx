import { useState } from 'react';

function Main(props) {
    // Crea una variabile di stato 'click' inizializzata come stringa vuota
    // setClick è la funzione per aggiornare lo stato 'click'
    const [click, setClick] = useState("Nessun linguaggio selezionato");
    const { languages } = props;
    return (
        <main>
            <div className="languages">
                {
                    languages.map((element) => {
                        const { id, title, description } = element;
                        const clickon = () => { setClick(description)};
                        return (
                        <button key={id} onClick={clickon}>{title}</button>
                    )
                    }
                )
                }
                {/* <div className="description">

                    <p>{click}</p>

                </div> */}


                 {/* prova passaggio onclick button components 
                <div>
                    {
                        languages.map((element) => {
                            const { description } = element;
                            const clickOn = () => { setClick(description) };
                            const { id } = element;
                            return (<Button key={id} languages={element} click={clickOn} />
                            )
                        })
                    }
                </div>  */}

                <div className="description">

                    <p>{click}</p>

                </div>
            </div>

        </main>
    )
}

export default Main;
