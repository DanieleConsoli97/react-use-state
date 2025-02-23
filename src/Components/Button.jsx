
function Button (props) {
  const {languages,click} = props;
  const  {title} = languages;
  const {clickOn} = click;
  return(
          
    <button onClick={clickOn}>{title}</button>
    
)
}
export default Button;