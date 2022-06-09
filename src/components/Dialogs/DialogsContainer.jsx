import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, changeTextAreaDialogsActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
   let store = props.store.getState()

   function addMessage() {
      props.store.dispatch(addMessageActionCreator())
   }
   function changeTextArea(event) {
      let text = event.target.value
      props.store.dispatch(changeTextAreaDialogsActionCreator(text))
   }

   let dialogsArray = store.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)
   let messagesArray = store.messagesPage.messages.map(msg => <Message message={msg.message} key={msg.id}/>)
   return (
      <Dialogs dialogsArray={dialogsArray}
               messagesArray={messagesArray}
               changeTextArea={changeTextArea}
               textAreaValue={store.messagesPage.textArea.value}
               addMessage={addMessage}
      />
   )
}

export default DialogsContainer
