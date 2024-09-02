import './App.css';

import React from 'react';

import Items from './Components/items';
import Category from './Components/Category';
import Show_Full_item from './Components/Show_Full_item';
import Header from './Components/header';
import Footer from './Components/footer';

import ImgBed1 from './img/bed-1.jpg';
import ImgBed2 from './img/bed-2.jpg';
import ImgBed3 from './img/bed-3.jpg';
import Chair1 from './img/chair-1.jpg'
import Chair2 from './img/chair-2.jpg'
import Chair3 from './img/chair-3.jpg'
import Sofa1 from './img/sofa-1.jpg'
import Sofa2 from './img/sofa-2.jpg'
import Sofa3 from './img/sofa-3.jpg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Кровать 1',
          img: ImgBed1, 
          category: 'Кровати',
          price: '29.9 $'
        },
        {
          id: 2,
          title: 'Кровать 2',
          img: ImgBed2,
          category: 'Кровати',
          price: '39.9 $'
        },
        {
          id: 3,
          title: 'Кровать 3',
          img: ImgBed3,
          category: 'Кровати',
          price: '39.9 $'
        },{
          id: 4,
          title: 'Сидение 1',
          img: Chair1,
          category: 'Сиденья',
          price: '39.9 $'
        },{
          id: 5,
          title: 'Сидение 2',
          img: Chair2,
          category: 'Сиденья',
          price: '39.9 $'
        },{
          id: 6,
          title: 'Сидение 3',
          img: Chair3,
          category: 'Сиденья',
          price: '39.9 $'
        },{
          id: 7,
          title: 'Диван 1',
          img: Sofa1,
          category: 'Диваны',
          price: '39.9 $'
        },{
          id: 8,
          title: 'Диван 2',
          img: Sofa2,
          category: 'Диваны',
          price: '39.9 $'
        },{
          id: 9,
          title: 'Диван 3',
          img: Sofa3,
          category: 'Диваны',
          price: '39.9 $'
        }
      ],
      showFullItem: false,
      fullItem: {}
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteCardItem = this.deleteCardItem.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <>
      <div className='wrapper'>
        <Header card={this.state.card} onDelete={this.deleteCardItem} />
        <Category chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <Show_Full_item onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
      
      </>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    });
  }

  deleteCardItem(id) {
    this.setState({ card: this.state.card.filter(el => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.card.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ card: [...this.state.card, item] });
    }
  }
}

export default App;
