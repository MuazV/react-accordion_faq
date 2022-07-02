import React, {useState} from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

const Faq = ({title,info}) => {
    const [toggle, setToggle] = useState(false)
    
  return (
    <div>
        <h3 className='title'><button className='btn' onClick={() => setToggle(!toggle)}>{toggle ?<AiFillMinusCircle className='icon'/>: <AiFillPlusCircle className='icon'/>}</button>{title}</h3>
        <h4 className='parag'>{toggle && info}
        <div></div>
        
        </h4>
        
    </div>
  )
}

export default Faq;