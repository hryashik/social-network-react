import messagesReducer, {addMessage, changeTextAreaDialogs} from "./messages-reducer";

const state = {
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
      value: "TEST-TEST",
   },
}

it('length of messages should be increment', () => {
   let action = addMessage()
   let newState = messagesReducer(state, action)
   expect(newState.messages.length).toBe(6)
})

it('value of text area shoould be changed', () => {
   let action = changeTextAreaDialogs('blabla')
   let newState = messagesReducer(state, action)
   expect(newState.textArea.value).not.toBe(state.textArea.value)
})