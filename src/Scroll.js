import React from 'react';

const Scroll = (props) => {
    return(
        <div className="scrollable-container" style={{overflowY: 'scroll', height:'500px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;