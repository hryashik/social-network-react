const ADD_POST = 'add-post';
const UPDATE_TEXT_AREA_POST = 'updateTextAreaPost';
const initialState = {
   posts: [
      {id: 1, text: "My first post", likesCount: 1},
      {id: 2, text: "Create by react", likesCount: 1},
      {id: 3, text: "Bye", likesCount: 1},
   ],
   textAreaInput: {
      value: "",
   },
}

function profileReducer(state = initialState, action) {
   let newState = JSON.parse(JSON.stringify(state));
   switch(action.type) {
      case ADD_POST:
         let newObj = {
            id: Date.now(),
            text: newState.textAreaInput.value,
            likesCount: 1,
         };
         newState.posts.push(newObj);
         console.log(newState.posts)
         newState.textAreaInput.value = "";
         return newState
      case UPDATE_TEXT_AREA_POST:
         newState.textAreaInput.value = action.text;
         return newState
      default:
         return state
   }
}

export default profileReducer;
export const addPostActionCreator = () => ({type: ADD_POST})
export const changeTextAreaActionCreator = (text) => ({type: UPDATE_TEXT_AREA_POST, text: text})