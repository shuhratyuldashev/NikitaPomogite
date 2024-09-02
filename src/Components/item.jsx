import React, { Component } from 'react'

export class item extends Component {
  render() {
    return (
      <div className='item-card'>
        <div className="img-item-card" onClick={() => this.props.onShowItem(this.props.item)}>
            <img src={this.props.item.img} alt="" />
        </div>
        <div className="info-item-card">
            <h2>{this.props.item.title}</h2>
            <div className="info-price-btn-item-card">
                <b>{this.props.item.price}</b>
                <button onClick={() => this.props.onAdd(this.props.item)}>В корзину</button>
            </div>
        </div>
      </div>
    )
  }
}

export default item