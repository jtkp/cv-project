import React, { Component } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';

class App extends Component {
  constructor() {
    super();

    this.update.bind(this);
    this.addExpCount.bind(this);
    this.addEduCount.bind(this);

    this.state = {
      info: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
      },
      expCount: 0,
      eduCount: 0,
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

  addExpCount = () => {
    this.setState(prevState => ({
      expCount: prevState.expCount + 1,
    }));
  };

  addEduCount = () => {
    this.setState(prevState => ({
      eduCount: prevState.eduCount + 1,
    }));
  };

  render() {
    let exp = [];
    let edu = [];

    for (let i=0; i < this.state.expCount; i++) {
      exp.push(<Experience key={i}></Experience>);
    }

    for (let i=0; i < this.state.eduCount; i++) {
      edu.push(<Education key={i}></Education>);
    }

    return (
      <div>
        <Header></Header>
        <form action="#" onSubmit={this.onSubmitForm}>
          <legend>Personal Information</legend>
          <label htmlFor='firstName'>
            <input type='text' onChange={this.update} id='firstName' placeholder='First Name'/>
          </label>
          <label htmlFor='lastName'>
            <input type='text' onChange={this.update} id='lastName' placeholder='Last Name'/>
          </label>
          <label htmlFor='title'>
            <input type='text' onChange={this.update} id='title' placeholder='Title'/>
          </label>
          <label htmlFor='address'>
            <input type='text' onChange={this.update} id='address' placeholder='Address'/>
          </label>
          <label htmlFor='phoneNumber'>
            <input type='text' onChange={this.update} id='phoneNumber' placeholder='Phone Number'/>
          </label>
          <label htmlFor='email'>
            <input type='text' onChange={this.update} id='email' placeholder='Email'/>
          </label>
          <label htmlFor='description'>
            <textarea type='text' onChange={this.update} id='description' placeholder='Description'/>
          </label>

          <legend>Experience</legend>
          {exp}
          <button id='newExp' onClick={this.addExpCount}>Add</button>

          <legend>Education</legend>
          {edu}
          <button id='newEdu' onClick={this.addEduCount}>Add</button>
        </form>
      </div>
    );
  }
}

export default App;
