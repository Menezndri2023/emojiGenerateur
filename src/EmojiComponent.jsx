import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./EmojiComponent.css"


const EmojiComponent = ()=> {
   const [emojis,setEmojis] = useState([{id:uuidv4(),emoji: "🙃"}]);


   const handleClick = () => {
    const newEmoji = {id:uuidv4(),emoji:"🙂"}
    setEmojis(menez =>(
      [...menez,newEmoji]
    ));
    console.log(emojis);
  };

  return (
    
    <div className="select">
          {emojis.map(item =>(
                <span key={item.id}>{item.emoji}</span>
          ))}
      
      <button className="button1" onClick={handleClick} > Add </button>
      
    </div>
  
  )
 }


    export default EmojiComponent 