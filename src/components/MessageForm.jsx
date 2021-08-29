import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {

   const [value, setValue] = useState('');
   const {cred, chatId} = props;

    const handleSubmit=(event)=>{
        event.preventDefault();

        const text=value.trimEnd();

        if(text.length > 0) sendMessage(cred, chatId, {text});

    }
    const handleChange=(event)=>{
       setValue(event.target.value);

       isTyping(props, chatId);
    }
    
    return(
       <form className="message-form" onSubmit={handleSubmit}>
           <input
               className="message-input"
               placeholder="send message"
               value={value}
               onChange={handleChange}
               onSubmit={handleSubmit}
           />

       </form>
    );
}

export default MessageForm;