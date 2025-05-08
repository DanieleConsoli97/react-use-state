
function Button (props) {
  console.log(props)
  const {languages,click} = props;
  console.log(languages)
  console.log(click)
  
 
  return(
          
    <button onClick={()=>(click())}>{languages.title}</button>
    
)
}
export default Button;