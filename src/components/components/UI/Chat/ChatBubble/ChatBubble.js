import React from "react";
import Button from "../../Button/Button";

const ChatBubble = ({ bubbleMessage, buttonValue, clickedButton }) => {
  return (
    <div>
      <p>{bubbleMessage}</p>
      <Button text={buttonValue} onclick={clickedButton} />
    </div>
  );
};

export default ChatBubble;
