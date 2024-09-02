import React, { Component } from 'react'

export class Category extends Component {
    constructor(props){
        super(props)
        this.state = {
            category: [
                {
                    key: 'all',
                    name: 'Все товары'
                },{
                    key: 'Кровати',
                    name: 'Кровати'
                },{
                    key: 'Сиденья',
                    name: 'Сиденья'
                },{
                    key: 'Диваны',
                    name: 'Диваны'
                }
            ]
        }
    }
  render() {
    return (
      <div className='category'>
        {this.state.category.map(el => (
            <div className='category-btns' onClick={() => this.props.chooseCategory(el.key)} key={el.key}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Category