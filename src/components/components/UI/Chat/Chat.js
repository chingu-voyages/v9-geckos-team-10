import React, { Component } from "react";
import ChatBubble from "./ChatBubble/ChatBubble";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatBubbleMessages: [],
      buttonValues: [],
      buttonValue: "Click me"
    };
  }
  /*
The below handler will change status regarding the user's
 options(food/drink) and the message the next buttons will display
*/

  buttonClickedkHandler = () => {
    console.log("button clicked");
  };
  render() {
    let { chatBubbleMessages, buttonValue } = this.state;
    return (
      <div>
        <ChatBubble
          bubbleMessage={chatBubbleMessages}
          buttonValue={buttonValue}
          clickedButton={this.buttonClickedkHandler}
        />
      </div>
    );
  }
}
