const ADD_MESSAGE = 'add-message';
const UPDATE_TEXT_AREA_DIALOGS = 'updateTextAreaDialogs';

function messagesReducer(state, action) {
   let newState = JSON.parse(JSON.stringify(state))
   switch(action.type) {
      case UPDATE_TEXT_AREA_DIALOGS :
         newState.textArea.value = action.text;
         return newState
      case ADD_MESSAGE :
         let newObj = {id: Date.now(), message: newState.textArea.value};
         newState.messages.push(newObj);
         newState.textArea.value = "";
         return newState
      default :
         return state
   }
}

export default messagesReducer;
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const changeTextAreaDialogsActionCreator = (text) => ({
   type: UPDATE_TEXT_AREA_DIALOGS,
   text: text
})