import s from './Dialogs.module.css'
import React from "react";
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs(props) {
   let mappedDialogs = props.dialogsArray.map(dialog => <DialogItem name={dialog.name}
                                                                    id={dialog.id}
                                                                    key={dialog.id}/>)
   let mappedMessages = props.messagesArray.map(msg => <Message message={msg.message}
                                                                key={msg.id}/>)
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {mappedDialogs}
         </div>
         <div className={s.messages}>
            {mappedMessages}
            <textarea onChange={(event) => props.changeTextAreaDialogs(event.target.value)}
                      value={props.textAreaValue}
            ></textarea>
            <button onClick={() => props.addMessage()}
            >Отправить</button>
         </div>
      </div>
   )
}

export default Dialogs
