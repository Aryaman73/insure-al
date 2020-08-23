import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

import { Container, Row, Col } from "react-bootstrap";
import { ThemeProvider } from "styled-components";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.steps.name || "",
      address: this.props.steps.address || "",
      yearsAtResidence: this.props.steps.yearsAtResidence || "",
      yearHouseBuilt: this.props.steps.yearHouseBuilt || "",
      typeRoof: this.props.steps.typeRoof || "",
      heatSource: this.props.steps.heatSource || "",
      roofDateReplace: this.props.steps.roofDateReplace || "",
      homeStories: this.props.steps.homeStories || "",
      pdl: this.props.steps.pdl || "",
      fdl: this.props.steps.fdl || "",
      vc: this.props.steps.vc || "",
    };
  }

  render() {
    const { name, address, yearsAtResidence, yearHouseBuilt, typeRoof, roofDateReplace, heatSource, pdl, fdl, vc } = this.state;

    //All Suggestions
    if ( (typeRoof.value != 1) && (heatSource.value != 1) )   {  //&& (roofDateReplace.value > 10 )
      return (
        <div> 
          <h3> Your Report: </h3>
          <p> Your Estimated Annual Insurance Cost: $851</p>
          <p> Here are some suggestions to decrease your insurance premiums: </p>
          <p> 1. Upgrade your roof to Metal or Copper Tiles </p>
          <p> 2. Your roofing is {roofDateReplace.value} years old! Ideally, it should be replaced every 10 years. </p>
          <p> 3. You should think about switching to a Gas Furnace! </p>
        </div>    
      );  
    } 
    //No roof replace
    else if ( (typeRoof.value != 1) && (heatSource.value != 1) && (roofDateReplace.value <= 10) )  {
      return (
        <div> 
          <h3> NOT IN DEMO Your Report: </h3>
          <p> Your Estimated Annual Insurance Cost: $912</p>
          <p> Here are some suggestions to decrease your insurance premiums: </p>
          <p> 1. Change your roof from {typeRoof.label} to Metal or Copper Tiles </p>
          <p> 2. You should think about switching from {heatSource.label} to Gas Furnaces! </p>
        </div>    
      );  
    }
    //Only change type of roof
    else if ( (typeRoof.value != 1) && (heatSource.value == 1) && (roofDateReplace.value <= 10) )  {
      return (
        <div> 
          <h3> NOT IN DEMO Your Report: </h3>
          <p> Your Estimated Annual Insurance Cost: $851</p>
          <p> Here are some suggestions to decrease your insurance premiums: </p>
          <p> 1. Change your roof from {typeRoof.label} to Metal or Copper Tiles </p>
        </div>    
      );  
    } 
    else {
      return (
        <div> 
          <h3> Your Report: </h3>
          <p> Your Estimated Annual Insurance Cost: $812</p>
          <p> We don't have any suggestions for you! Your Insurance Premium is close to as low as it can be. </p>
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

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

function mybot() {
  return (
    <ThemeProvider theme={theme}>
    <ChatBot
      style={{ width: "80vw", height: "40vw"}}
      contentStyle={{ height: "32vw" }}
      botDelay={250}
      steps={[
        {
          id: "1",
          message: "Hello! My name is Insur-Al, and I am here to help you with a free instant home insurance estimate. To get started, what is your name?",
          trigger: "name",
        },
        {
          id: "name",
          user: true,
          trigger: "2",
        },
        {
          id: "2",
          message: "Nice to meet you {previousValue}! 😄 What is the address of your home?",
          trigger: "address",
        },
        {
          id: "address",
          user: true,
          trigger: "3",
        },
        {
          id: "3",
          message: "Great! How many years have you spent at {previousValue} ?",
          trigger: "yearsAtResidence",
        },
        {
          id: "yearsAtResidence",
          options: [
            {
              value: "< 6 Months",
              label: "< 6 months",
              trigger: "4",
            },
            { value: "6 months - 1 year", label: "6 months - 1 year", trigger: "4" },
            {
              value: "1 year",
              label: "1 year",
              trigger: "4",
            },
            { value: "2 years", label: "2 years", trigger: "4" },
            { value: "> 3 years", label: "> 3 years", trigger: "4" },
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
          message: "Okay, now what type of roof do you have? ",
          trigger: "typeRoof",
        },
        {
          id: "typeRoof",
          options: [
            { value: "1", label: "Aluminum", trigger: "6" },
            {
              value: "2",
              label: "Asphalt Shingles",
              trigger: "6",
            },
            { value: "3", label: "Clay Tile", trigger: "6" },
            { value: "4", label: "Wood Tile", trigger: "6" },
            { value: "5", label: "Other", trigger: "6" },
          ],
        },
        {
          id: "6",
          message:
            "How many years ago was your roof replaced? If you're not sure, just enter 0:",
          trigger: "roofDateReplace",
        },
        {
          id: "roofDateReplace",
          user: true,
          trigger: "9",
        },
        //Basement and No. of Stories removed
        {
          id: "9",
          message: "What is your home's primary heating source?",
          trigger: "heatSource",
        },
        {
          id: "heatSource",
          options: [
            {
              value: "1",
              label: "Central Furnace – Gas",
              trigger: "10",
            },
            {
              value: "2",
              label: "Central Furnace – Oil",
              trigger: "10",
            },
            {
              value: "3",
              label: "Central Furnace – Wood",
              trigger: "10",
            },
            { value: "4", label: "Electric", trigger: "10" },
            { value: "5", label: "Other", trigger: "10" },
          ],
        },
        {
          id: "10",
          message: "Awesome! 😄 Now, let's talk about what kind of insurance coverage you're looking for: ",
          trigger: "11",
        },
        {
          id: "11",
          message: "Are you interested in Property Damage Liability? How much coverage do you require?",
          trigger:"11options",
        },
        {
          id: "11options",
          options: [
            {
              value: "Yes",
              label: "Yes",
              trigger: "pdl",
            },
            {
              value: "No",
              label: "No",
              trigger: "12",
            }
          ],
        },
        {
          id:"pdl",
          options: [
            {
              value: "$1,000,000",
              label: "$1,000,000",
              trigger: "12",
            },
            {
              value: "$2,000,000",
              label: "$2,000,000",
              trigger: "12",
            },
            {
              value: "$3,000,000",
              label: "$3,000,000",
              trigger: "12",
            },
          ]
        },
        {
          id:"12",
          message: "Are you interested in Flooding Damage Liability? How much coverage do you require?",
          trigger: "12options",
        },
        {
          id:"12options",
          options: [
            {
              value: "Yes",
              label: "Yes",
              trigger: "fdl",
            },
            {
              value: "No",
              label: "No",
              trigger: "13",
            }
          ],
        },
        {
          id:"fdl",
          options: [
            {
              value: "$100,000",
              label: "$100,000",
              trigger: "13",
            },
            {
              value: "$200,000",
              label: "$200,000",
              trigger: "13",
            },
            {
              value: "$300,000",
              label: "$300,000",
              trigger: "13",
            },
          ]
        },
        {
          id:"13",
          message: "And finally, are you interested in Vandalism & Malicious Act Damage coverage? How much coverage do you require?",
          trigger: "13options",
        },
        {
          id:"13options",
          options: [
            {
              value: "Yes",
              label: "Yes",
              trigger: "vc",
            },
            {
              value: "No",
              label: "No",
              trigger: "14",
            }
          ],
        },
        {
          id:"vc",
          options: [
            {
              value: "$100,000",
              label: "$100,000",
              trigger: "14",
            },
            {
              value: "$200,000",
              label: "$200,000",
              trigger: "14",
            },
            {
              value: "$300,000",
              label: "$300,000",
              trigger: "14",
            },
          ]
        },
        {
          id:"14",
          message: "Phew! 😅 Thanks for answering all of the questions! Now, let us see what I can do for you...",
          trigger: "15",
        },
        {
          id:"15",
          component:<Review />,
          asMessage: true,
          trigger: "16",
        },
        {
          id:"16",
          component:<div> This is how your monthly premiums would go down if you make these changes over the next two years! <img src={require('./sample_graph.png')} /> </div>,
          asMessage: true,
          trigger: "17",
        }, 
        {
          id:"17",
          message: "Would you like to know more about how Insurance Premiums are calculated?",
          trigger: "17options",
        },
        {
          id:"17options",
          options: [
            {
              value: "Yes",
              label: "Yes",
              trigger: "intactLink",
            },
            {
              value: "No",
              label: "No", 
              trigger: "ending",
            }
          ]
        },
        {
          id:"intactLink",
          component: <a href="https://www.intact.ca/blog/en/determining-your-home-insurance-premium.html" target="_blank"> Click here to go to Intact's websie to learn more! </a>,
          asMessage: true,
          trigger:"intactContact",
        },
        {
          id:"intactContact",
          message: "Alternatively, you can talk to one of my human friends for more information! Call 1-844-790-0212",
          trigger: "ending",
        },
        {
          id:"ending",
          message: "Goodbye! See you soon! 🙋‍♂️",
          end:true,
        }


        
      ]}
    />
    </ThemeProvider>
  );
}

export default mybot;
