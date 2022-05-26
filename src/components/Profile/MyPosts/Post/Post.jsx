import s from './Post.module.css'

function Post(props) {
   return (
      <div className={s.item}>
         <div className={s.avatar}></div>
         <div className={s.comment}>{props.age || 'hello'}</div>
      </div>
   )
}

export default Post;