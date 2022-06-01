import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

function MyPosts(props) {
   let textArea = React.createRef();
   let postsArray = props.posts.map(el => <Post message={el.text} key={el.id}/>)

   function addPost() {
      let text = textArea.current.value
      props.addPost(text)
      textArea.current.value = ''
      console.log(props.posts)
   }

   function changeTextArea() {
      let text = textArea.current.value;
      props.updateTextAreaState(text);
   }

   return (
      <div className={s.posts}>
         <div>
            <textarea onChange={changeTextArea}
                      ref={textArea}
                      className={s.textarea}
                      value={props.textArea.value} cols="40" rows="3"></textarea>
         </div>
         <div>
            <button className={s.button} onClick={addPost}>Add post</button>
         </div>
         <h3>My posts</h3>
         {postsArray}
      </div>
   )
}

export default MyPosts;