import React, { Component } from 'react'

export class showFull_item extends Component {
  render() {
    return (
      <div className='full-item'>
        <div className="full-item-content">
          <div className="img-item-card" onClick={() => this.props.onShowItem(this.props.item)}>
              <img src={this.props.item.img} alt="" />
          </div>
          <div className="info-item-card">
              <h2>{this.props.item.title} <span>{this.props.item.category}</span></h2>                  
              <b>{this.props.item.price}</b>
              <div className="info-price-btn-item-card">
                  <button onClick={() => this.props.onAdd(this.props.item)}>В корзину</button>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default showFull_item