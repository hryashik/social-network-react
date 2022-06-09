import s from './Dialogs.module.css'
import React from "react";

function Dialogs(props) {
   function onChangeTextArea(event) {
      props.changeTextArea(event)
   }
   function onClickButton() {
      props.addMessage()
   }
   let messages = props.messagesArray
   let dialogs = props.dialogsArray
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogs}
         </div>
         <div className={s.messages}>
            {messages}
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
