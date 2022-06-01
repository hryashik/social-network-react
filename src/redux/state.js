let rerenderEntireTree = () => {
   console.log(123)
}

let state = {
   profilePage: {
      posts: [
         {id: 1, text: 'My first post', likesCount: 1},
         {id: 2, text: 'Create by react', likesCount: 1},
         {id: 3, text: 'Bye', likesCount: 1}
      ],
      textAreaInput: {
         value: '',
      }
   },
   messagesPage: {
      dialogs: [
         {id: 1, name: 'Viktor'},
         {id: 2, name: 'Peter'},
         {id: 3, name: 'Valera'},
         {id: 4, name: 'Sasha'},
         {id: 5, name: 'Dimych'}
      ],
      messages: [
         {id: 1, message: 'Hello'},
         {id: 2, message: 'how r u'},
         {id: 3, message: 'Yo'},
         {id: 4, message: 'yo'},
         {id: 5, message: 'yo'}
      ],
      textArea: {
         value: '',
      }
   }
}

///////////////// EXPORT

export function addPost() {
   let newObj = {
      id: Date.now(),
      text: state.profilePage.textAreaInput.value,
      likesCount: 1
   }
   state.profilePage.posts.push(newObj)
   state.profilePage.textAreaInput.value = ''
   rerenderEntireTree(state)
}
export function addMessage() {
   let newObj = {id: Date.now(), message: state.messagesPage.textArea.value}
   state.messagesPage.messages.push(newObj)
   state.messagesPage.textArea.value = ''
   rerenderEntireTree(state)
}

export function updateTextAreaState(text) {
   state.profilePage.textAreaInput.value = text;
   rerenderEntireTree(state)
}
export function updateTextAreaStateDialogs(text) {
   state.messagesPage.textArea.value = text;
   rerenderEntireTree(state)
}
export default state;

export function subscribe(observer) {
   rerenderEntireTree = observer;
}