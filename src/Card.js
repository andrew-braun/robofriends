import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="robot-card bg-light-green br3 pa3 ma2 bw2 shadow-5 grow">
      <h2 className="tc">RoboFriend</h2>
      <div className="tc">
        <img src={`https://robohash.org/${name}?size=200x200`} alt="profile" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
