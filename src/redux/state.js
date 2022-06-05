let store = {
   _state: {
      profilePage: {
         posts: [
            {id: 1, text: "My first post", likesCount: 1},
            {id: 2, text: "Create by react", likesCount: 1},
            {id: 3, text: "Bye", likesCount: 1},
         ],
         textAreaInput: {
            value: "",
         },
      },
      messagesPage: {
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
      },
   },
   _callSubscriber() {
      console.log(123);
   },
   getState() {
      return this._state
   },
   addPost() {
      let newObj = {
         id: Date.now(),
         text: this._state.profilePage.textAreaInput.value,
         likesCount: 1,
      };
      this._state.profilePage.posts.push(newObj);
      this._state.profilePage.textAreaInput.value = "";
      this._callSubscriber(this._state);
   },
   addMessage() {
      let newObj = {id: Date.now(), message: this._state.messagesPage.textArea.value};
      this._state.messagesPage.messages.push(newObj);
      this._state.messagesPage.textArea.value = "";
      this._callSubscriber(this._state);
   },
   updateTextAreaState(text) {
      this._state.profilePage.textAreaInput.value = text;
      this._callSubscriber(this._state);
   },
   updateTextAreaStateDialogs(text) {
      this._state.messagesPage.textArea.value = text;
      this._callSubscriber(this._state);
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   dispatch(action) {
      if (action.type === 'add-post') {
         let newObj = {
            id: Date.now(),
            text: this._state.profilePage.textAreaInput.value,
            likesCount: 1,
         };
         this._state.profilePage.posts.push(newObj);
         this._state.profilePage.textAreaInput.value = "";
         this._callSubscriber(this._state);
      } else if (action.type === 'updateTextAreaPost') {
         this._state.profilePage.textAreaInput.value = action.text;
         this._callSubscriber(this._state);
      }
   }
};

export default store;


