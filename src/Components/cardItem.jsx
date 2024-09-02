import React, { Component } from 'react'
import { MdOutlineDelete } from "react-icons/md";

export class cardItem extends Component {
  render() {
    return (
      <div className='card-item'>
         <div className="img-card-item">
            <img src={this.props.item.img} alt={this.props.item.img} />
        </div>
        <div className="info-card-item">
            <h2>{this.props.item.title}</h2>  
            <b>{this.props.item.price}</b>
            <MdOutlineDelete className='info-card-delete-icon' size={20} onClick={() => this.props.onDelete(this.props.item.id)}/>
        </div>
    </div>
    )
  }
}

export default cardItem