import {addMessageActionCreator, changeTextAreaDialogsActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*function DialogsContainer(props) {
   let state = props.store.getState()

   function addMessage() {
      props.store.dispatch(addMessageActionCreator())
   }
   function changeTextArea(event) {
      let text = event.target.value
      props.store.dispatch(changeTextAreaDialogsActionCreator(text))
   }

   let dialogsArray = state.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)
   let messagesArray = state.messagesPage.messages.map(msg => <Message message={msg.message} key={msg.id}/>)
   return (
      <Dialogs dialogsArray={dialogsArray}
               messagesArray={messagesArray}
               changeTextArea={changeTextArea}
               textAreaValue={state.messagesPage.textArea.value}
               addMessage={addMessage}
      />
   )
}*/

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

function mapStateToProps(state) {
   return {
      dialogsArray: state.messagesPage.dialogs,
      messagesArray: state.messagesPage.messages,
      textAreaValue: state.messagesPage.textArea.value
   }
}
function mapDispatchToProps(dispatch) {
   return {
      addMessage() {
         dispatch(addMessageActionCreator())
      },
      changeTextArea(event) {
         let text = event.target.value
         dispatch(changeTextAreaDialogsActionCreator(text))
      }
   }
}

export default SuperDialogsContainer
