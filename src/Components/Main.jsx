import { useState } from 'react';
import Button from "./Button"
function Main(props) {
    // Crea una variabile di stato 'click' inizializzata come stringa vuota
    // setClick è la funzione per aggiornare lo stato 'click'
    const [description, setDescription] = useState("Nessun linguaggio selezionato");
    const [selectedButton, setSelectedButton] = useState(null)
    const { languages } = props;
    
    
    return (
        <main>
            <div className="languages">
                
                {
                
                languages.map((element) => {
                        
                        const { id, title, description } = element;
                        const clickon = () =>  setDescription(description);
                        return (
                        
                        <button key={id} onClick={clickon}>{title}</button>

                    )
                    }
                )
                }
                {/* <div className="description">

                    <p>{click}</p>

                </div> */}


                  {/* prova passaggio onclick button components  */}
                <div>
                    {
                        languages.map((element) => {
                            const { description } = element;
                            const clickOn = () => setDescription(description) ;
                            const { id } = element;
                            return (<Button key={id} languages={element} click={clickOn} />
                            )
                        })
                    }
                </div>  

                <div className="description">

                    <p>{description}</p>

                </div>
            </div>

        </main>
    )
}

export default Main;
