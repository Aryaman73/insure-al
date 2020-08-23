import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

import { Container, Row, Col } from "react-bootstrap";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.steps.name || "",
      address: this.props.steps.address || "",
      yearsAtResidence: this.props.steps.yearsAtResidence || "",
      yearHouseBuilt: this.props.steps.yearHouseBuilt || "",
    };
  }

  // componentWillMount() {
  //   const { steps } = this.props;
  //   const { name, policy, age } = steps;

  //   this.setState({ name, policy, age });
  // }

  render() {
    const { name, address, yearsAtResidence, yearHouseBuilt } = this.state;
    if (yearHouseBuilt.value > 2000) {
      return (
        <div>
          {" "}
          Your house was built after 2000 (i.e. the year {yearHouseBuilt.value}
          ), and thus your insurance premium is quite low!{" "}
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          Your house was built before 2000, and thus, your insurance premium
          ranges from $500 to $700
        </div>
      );
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
    <ChatBot
      style={{ width: "80vw", height: "40vw" }}
      contentStyle={{ height: "32vw" }}
      steps={[
        {
          id: "1",
          message: "Hello! What is your name?",
          trigger: "name",
        },
        {
          id: "name",
          user: true,
          trigger: "2",
        },
        {
          id: "2",
          message: "Hi {previousValue}! What is your address?",
          trigger: "address",
        },
        {
          id: "address",
          user: true,
          trigger: "3",
        },
        {
          id: "3",
          message: "How many years have you spent at {previousValue} ?",
          trigger: "yearsAtResidence",
        },
        {
          id: "yearsAtResidence",
          options: [
            {
              value: "Less than 1 Year",
              label: "Less than 1 year",
              trigger: "4",
            },
            { value: "1 - 3 years", label: "1 - 3 years", trigger: "4" },
            {
              value: "More than 3 years",
              label: "More than 3 years",
              trigger: "4",
            },
          ],
        },
        {
          id: "4",
          message: "In what year was your home built? ",
          trigger: "yearHouseBuilt",
        },
        {
          id: "yearHouseBuilt",
          user: true,
          trigger: "5",
        },
        {
          id: "5",
          message: "What type of roof do you have? ",
          trigger: "typeRoof",
        },
        {
          id: "typeRoof",
          options: [
            { value: "Aluminum", label: "Aluminum", trigger: "6" },
            {
              value: "Asphalt Shingles",
              label: "Asphalt Shingles",
              trigger: "6",
            },
            { value: "Clay Tile", label: "Clay Tile", trigger: "6" },
            { value: "Wood Tile", label: "Wood Tile", trigger: "6" },
            { value: "Metal", label: "Metal", trigger: "6" },
          ],
        },
        {
          id: "6",
          message:
            "In what year was your roof last replaced? (type '0' for never)?",
          trigger: "roofDateReplace",
        },
        {
          id: "roofDateReplace",
          user: true,
          trigger: "7",
        },
        {
          id: "7",
          message: "How many stories is your home? (i.e. 1,2,3, or etc.)",
          trigger: "homeStories",
        },
        {
          id: "homeStories",
          user: true,
          trigger: "8",
        },
        {
          id: "8",
          message: "Do you have a basement?",
          trigger: "basementBool",
        },
        {
          id: "basementBool",
          options: [
            { value: "Yes", label: "Yes", trigger: "9" },
            { value: "No", label: "No", trigger: "9" },
          ],
        },
        {
          id: "9",
          message: "What is your home's primary heating source?",
          trigger: "heatSource",
        },
        {
          id: "heatSource",
          options: [
            {
              value: "Central Furnace – Gas",
              label: "Central Furnace – Gas",
              trigger: "10",
            },
            {
              value: "Central Furnace – Oil",
              label: "Central Furnace – Oil",
              trigger: "10",
            },
            {
              value: "Central Furnace – Wood",
              label: "Central Furnace – Wood",
              trigger: "10",
            },
            { value: "Electric", label: "Electric", trigger: "10" },
            { value: "Solar", label: "Solar", trigger: "10" },
          ],
        },
      ]}
    />
  );
}

export default mybot;
