import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

import {Container, Row, Col} from 'react-bootstrap';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.steps.name || '',
      address: this.props.steps.address || '',
      yearsAtResidence: this.props.steps.yearsAtResidence || '',
      yearHouseBuilt: this.props.steps.yearHouseBuilt || '',
    };
  }

  // componentWillMount() {
  //   const { steps } = this.props;
  //   const { name, policy, age } = steps;

  //   this.setState({ name, policy, age });
  // }

  render() {
    const { name, address,yearsAtResidence, yearHouseBuilt } = this.state;
    if (yearHouseBuilt.value > 2000) {
      return ( <div> Your house was built after 2000 (i.e. the year {yearHouseBuilt.value}), and thus your insurance premium is quite low!  </div> );
    } else {
      return ( <div> Your house was built before 2000, and thus, your insurance premium ranges from $500 to $700</div> );
    } 


  }

}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: PropTypes.object,
};

function mybot() {
  return (
    <ChatBot style={{width:'80vw', height:'40vw'}} contentStyle={{height:'32vw'}}
      steps={[
        {
          id: '1',
          message: 'Hello! What is your name?',
          trigger: 'name',
        },
        {
          id: 'name',
          user: true,
          trigger: '2',
        },
        {
          id: '2',
          message: 'Hi {previousValue}! What is your address?',
          trigger: 'address',
        },
        {
          id: 'address',
          user: true,
          trigger: '3', 
        },
        {
          id: '3',
          message: 'How many years have you spent at your current residence?',
          trigger: 'yearsAtResidence',
        },
        {
          id: 'yearsAtResidence',
          options: [
            { value: 'Less than 1 Year', label: 'Less than 1 year', trigger: '4' },
            { value: '1 - 3 years', label: '1 - 3 years', trigger: '4' },
            { value: 'More than 3 years', label: 'More than 3 years', trigger: '4' },
          ],
        },
        {
          id: '4',
          message: 'What year was your home built in? ',
          trigger: 'yearHouseBuilt',
        },
        {
          id: 'yearHouseBuilt',
          user: true,
          trigger: '5',
        },
        {
          id: '5',
          component: <Review />,
          asMessage: true,
          end: true,
        }
      ]}
    />  
  );
}

export default mybot;