const ADD_POST = 'add-post';
const UPDATE_TEXT_AREA_POST = 'updateTextAreaPost';

function profileReducer(state, action) {
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