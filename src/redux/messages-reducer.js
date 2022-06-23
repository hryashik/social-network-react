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

/*МОЖНО СЭКОНОМИТЬ НА ПАМЯТИ И НЕ ДЕЛАТЬ ПОЛНУЮ КОПИЮ СТЕЙТА. НАПР: РАЗВЕРНУТЬ СПРЕДОМ ОБЪЕКТ В НОВУЮ ПЕРЕМЕННУЮ,
НО ССЫЛКУ НА МАССИВ/ОБЪЕКТ ВНУТРИ СТЕЙТА ОСТАВИТЬ СТАРУЮ, ТЕМ САМЫМ НЕ ЗАБИРАЯ ЛИШНЮЮ ПАМЯТЬ ПОД НОВЫЙ ОБЪЕКТ/МАССИВ
ЭТО НЕ ГЛУБОКОЕ КОПИРОВАНИЕ
let newState = {...oldState}
newState.textArea.value = action.text
^^ ссылка на массив messages остается старая, ее мы не трогаем
*/

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
export const addMessage = () => ({type: ADD_MESSAGE})
export const changeTextAreaDialogs = (text) => ({
   type: UPDATE_TEXT_AREA_DIALOGS,
   text: text
})