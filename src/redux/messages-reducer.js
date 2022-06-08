const ADD_MESSAGE = 'add-message';
const UPDATE_TEXT_AREA_DIALOGS = 'updateTextAreaDialogs';

function messagesReducer(state, action) {
   if (action.type === UPDATE_TEXT_AREA_DIALOGS) {
      state.textArea.value = action.text;
   } else if (action.type === ADD_MESSAGE) {
      let newObj = {id: Date.now(), message: state.textArea.value};
      state.messages.push(newObj);
      state.textArea.value = "";
   }
   return state
}

export default messagesReducer;
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const changeTextAreaDialogsActionCreator = (text) => ({
   type: UPDATE_TEXT_AREA_DIALOGS,
   text: text
})