import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, changeTextAreaActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
   let state = props.store.getState()
   let postsArray = state.profilePage.posts.map(el => (
      <Post message={el.text} key={el.id}/>
   ));

   function addPost() {
      props.store.dispatch(addPostActionCreator())
   }

   function changeTextArea(text) {
      props.store.dispatch(changeTextAreaActionCreator(text));
   }

   return (
      <MyPosts changeTextArea={changeTextArea}
               postsArray={postsArray}
               textAreaValue={state.profilePage.textAreaInput.value}
               addPost={addPost}
      />
   );
}

export default MyPostsContainer;
