import React from "react";

interface Props {
  text: string;
}
const JokeItem: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default JokeItem;
