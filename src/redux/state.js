import {rerenderEntireTree} from "../render";

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
   }
}

export function addPost(text) {
   let newObj = {
      id: Date.now(),
      text: text,
      likesCount: 1
   }
   state.profilePage.posts.push(newObj)
   updateTextAreaState('')
   rerenderEntireTree(state)
}
export function addMessage(text) {
   let newObj = {id: Date.now(), message: text}
   state.messagesPage.messages.push(newObj)
}

export function updateTextAreaState(text) {
   state.profilePage.textAreaInput.value = text;
   rerenderEntireTree(state)
}

export default state;