import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();

    this.addExperience.bind(this);
    this.addEducation.bind(this);

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
      experience: 0,
      education: 0,
    };
  }

  addExperience() {
    this.setState(prevState => ({
      experience: prevState.experience + 1,
    }));
  }

  addEducation() {
    this.setState(prevState => ({
      education: prevState.education + 1,
    }));
  }

  render() {
    let experience = [];
    let education = [];

    for (let i=0; i < experience; i++) {
      experience.push(<h1 key={i}>TEST</h1>);
      console.log('test');
    }

    return (
      <div>
        <Header></Header>
        <form action="#" onSubmit={this.onSubmitForm}>
          <legend>Personal Information</legend>
          <label htmlFor='firstName'>
            <input type='text' id='firstName' placeholder='First Name'/>
          </label>
          <label htmlFor='lastName'>
            <input type='text' id='lastName' placeholder='Last Name'/>
          </label>
          <label htmlFor='title'>
            <input type='text' id='title' placeholder='Title'/>
          </label>
          <label htmlFor='address'>
            <input type='text' id='address' placeholder='Address'/>
          </label>
          <label htmlFor='email'>
            <input type='text' id='email' placeholder='Email'/>
          </label>
          <label htmlFor='description'>
            <textarea type='text' id='description' placeholder='Description'/>
          </label>

          <legend>Experience</legend>
          {experience}
          <button id='newExp' onClick={console.log('test')}>Add</button>

          <legend>Education</legend>
          {education}
          <button id='newEdu' onClick={this.addEducation}>Add</button>
        </form>
      </div>
    );
  }
}

export default App;
