import React, { Component } from 'react';

class Counter extends Component {
  state = { 
    count: 0 ,
    tags: []
  };


  handleIncrement = () => {
    console.log('Increment Clicked', this);

  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>
    return  <ul> { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) } </ul>
  }

   
  

  render() {

    this.getBadgeClasses();

    return (
    <div>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
    </div>
    );
  } 

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? 'warning' : 'primary';
  }

  formatCount(){
    const { count } = this.state;
    return count === 0 ? 'Zero': count
  }
}
 
export default Counter;