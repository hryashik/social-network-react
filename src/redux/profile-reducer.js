const ADD_POST = 'add-post';
const UPDATE_TEXT_AREA_POST = 'updateTextAreaPost';

function profileReducer(state, action) {
   let newObj = {};
   Object.assign(newObj, state)
   switch (action.type) {
      // case ADD_POST:
      //    let newObj = {
      //       id: Date.now(),
      //       text: state.textAreaInput.value,
      //       likesCount: 1,
      //    };
      //    state.posts.push(newObj);
      //    state.textAreaInput.value = "";
      //    return state
      case UPDATE_TEXT_AREA_POST:
         newObj.textAreaInput.value = action.text;
         console.log(typeof newObj)
         return newObj
      default:
         return state
   }
}

export default profileReducer;
export const addPostActionCreator = () => ({type: ADD_POST})
export const changeTextAreaActionCreator = (text) => ({type: UPDATE_TEXT_AREA_POST, text: text})