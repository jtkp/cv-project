import React, { Component } from 'react';

class Education extends Component {
  constructor() {
    super();

    this.state = {
      university: '',
      city: '',
      degree: '',
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
      <div className='eduCard'>
        <label htmlFor='university'>
          <input type='text' onChange={this.update} id='university' placeholder='University'/>
        </label>
        <label htmlFor='city'>
          <input type='text' onChange={this.update} id='city' placeholder='City'/>
        </label>
        <label htmlFor='degree'>
          <input type='text' onChange={this.update} id='degree' placeholder='Degree'/>
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

export default Education;