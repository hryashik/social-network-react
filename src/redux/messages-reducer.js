const ADD_MESSAGE = 'add-message';
const UPDATE_TEXT_AREA_DIALOGS = 'updateTextAreaDialogs';
const initialState = {
   dialogs: [
      {id: 1, name: "Viktor"},
      {id: 2, name: "Peter"},
      {id: 3, name: "Valera"},
      {id: 4, name: "Sasha"},
      {id: 5, name: "Dimych"},
   ],
   messages: [
      {id: 1, message: "Hello"},
      {id: 2, message: "how r u"},
      {id: 3, message: "Yo"},
      {id: 4, message: "yo"},
      {id: 5, message: "yo"},
   ],
   textArea: {
      value: "",
   },
}

function messagesReducer(state = initialState, action) {
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