import React from "react";
import s from './InputStatus.module.css'

export class InputStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status
   }

   activateEditMode = () => {
      this.setState({
         editMode: true
      })
   }

   deactivateEditMode = () => {
      this.setState({
         editMode: false
      })
      this.props.updateStatus(this.state.status)
   }

   onChangeInput = (event) => {
      this.setState({
         status: event.target.value
      })
   }

   render() {
      return (
         <>
            {this.state.editMode ?
               <div>
                  <input type="text"
                         className={s.input}
                         onBlur={this.deactivateEditMode}
                         autoFocus={true}
                         value={this.state.status}
                         onChange={this.onChangeInput}/>
               </div>
               :
               <div>
                  <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
               </div>
            }
         </>
      )
   }
}
