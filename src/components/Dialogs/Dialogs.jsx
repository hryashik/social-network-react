import s from './Dialogs.module.css'
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

function Dialogs(props) {
   function clickOnButton() {
      let text = textArea.current.value;
      props.addMessage(text)
      textArea.current.value = '';
   }
   function updateTextArea() {
      let text = textArea.current.value;
      props.updateTextAreaStateDialogs(text)
   }

   let textArea = React.createRef()
   let dialogsArray = props.messagePage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                          key={dialog.id}/>)
   let messagesArray = props.messagePage.messages.map(msg => <Message message={msg.message} key={msg.id}/>)

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsArray}
         </div>
         <div className={s.messages}>
            {messagesArray}
            <textarea ref={textArea}
                      value={props.messagePage.textArea.value}
                      onChange={updateTextArea}
            ></textarea>
            <button onClick={clickOnButton}>Отправить</button>
         </div>
      </div>
   )
}

export default Dialogs
