import s from './Dialogs.module.css'
import React from "react";
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs(props) {
   let mappedDialogs = props.dialogsArray.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)
   let mappedMessages = props.messagesArray.map(msg => <Message message={msg.message} key={msg.id}/>)
   function onChangeTextArea(event) {
      props.changeTextArea(event)
   }
   function onClickButton() {
      props.addMessage()
   }
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {mappedDialogs}
         </div>
         <div className={s.messages}>
            {mappedMessages}
            <textarea onChange={onChangeTextArea}
                      value={props.textAreaValue}
            ></textarea>
            <button onClick={onClickButton}
            >Отправить</button>
         </div>
      </div>
   )
}

export default Dialogs
