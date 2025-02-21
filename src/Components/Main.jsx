import Button from './Button';
function Main (props) {
    const {languages} = props;
    return (
        <main>
            <div className="languages">
            {
             
              languages.map((element)=>{
              const {id,title} = element;
                
                return( <Button key={id} title={title} /> )  
              })
            }
            
            </div>
            <div className="description">
            </div>
        </main>
    )
} 
export default Main;