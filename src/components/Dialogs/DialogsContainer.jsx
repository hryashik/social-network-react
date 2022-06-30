import {addMessage, changeTextAreaDialogs} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from 'react'
import {checkAuth} from '../Hoc/WithAuthRedirect'
import {compose} from "redux";

class DialogsContainer extends React.Component {
   render() {
      return <Dialogs {...this.props}/>
   }
}

function mapStateToProps(state) {
   return {
      dialogsArray: state.messagesPage.dialogs,
      messagesArray: state.messagesPage.messages,
      textAreaValue: state.messagesPage.textArea.value
   }
}

export default compose(
   connect(mapStateToProps, {addMessage, changeTextAreaDialogs}),
   checkAuth
)(DialogsContainer)
