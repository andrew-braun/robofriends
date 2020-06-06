import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow">
            <h1>RoboFriends</h1>
            <div className="tc">
                <img src={`https://robohash.org/${id}?size=200x200`} alt="profile"/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card