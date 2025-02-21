import {useState} from 'react';
function Button (props) {
  const  {id,title} = props;
  return(
          <button key={id} onClick={setClick}>{title}</button>

    )
}
export default Button;