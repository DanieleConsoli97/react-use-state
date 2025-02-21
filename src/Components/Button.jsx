function Button (props) {
  const  {id,title} = props;
  return(
    
    
          <button key={id}>{title}</button>
    
    )
}
export default Button;