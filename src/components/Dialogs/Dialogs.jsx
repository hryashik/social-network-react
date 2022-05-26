import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialog(props) {
   let path = '/dialogs/' + props.id
   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

function Message(props) {
   return (
      <div className={s.message}>{props.message}</div>
   )
}

function Dialogs() {
   let dialogsData = [
      {id: 1, name: 'Viktor'},
      {id: 2, name: 'Peter'},
      {id: 3, name: 'Valera'},
      {id: 4, name: 'Sasha'},
      {id: 5, name: 'Dimych'},
   ];

   let dialogsArray = dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)

   let messagesData = [
      {id: 1, message: 'Hello'},
      {id: 2, message: 'how r u'},
      {id: 3, message: 'Yo'},
      {id: 4, message: 'yo'},
      {id: 5, message: 'yo'},
   ];
   let messagesArray = messagesData.map(msg => <Message message={msg.message} key={msg.id}/>)

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            { dialogsArray }
         </div>
         <div className={s.messages}>
            { messagesArray }
         </div>
      </div>
   )
}

export default Dialogs
