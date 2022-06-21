import {addMessageActionCreator, changeTextAreaDialogsActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

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

export default DialogsContainer
