import React, { Component } from 'react';

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      role: '',
      company: '',
      city: '',
      from: '',
      to: '',
    };
  }
  
  update = (event) => {
    let key = event.target.id;
    this.setState({
      info: {
        [key]: event.target.value,
      },
    });
    console.log(event.target.id);
  }

  render() {
    return (
      <div className='expCard'>
        <label htmlFor='role'>
          <input type='text' onChange={this.update} id='role' placeholder='Role'/>
        </label>
        <label htmlFor='company'>
          <input type='text' onChange={this.update} id='company' placeholder='Company'/>
        </label>
        <label htmlFor='city'>
          <input type='text' onChange={this.update} id='city' placeholder='City'/>
        </label>
        <label htmlFor='from'>
          <input type='text' onChange={this.update} id='from' placeholder='From'/>
        </label>
        <label htmlFor='to'>
          <input type='text' onChange={this.update} id='to' placeholder='To'/>
        </label>
      </div>
    )
  }
}

export default Experience;