import React from 'react';

class Block extends React.Component {
    render() {
        // if datapoint, add link
        // mouseOver
        return (
            <div style={{display: 'inline-block', border: '1px black solid', height: '20px', width: '20px', margin: '1px'}}></div>
            );
    }
}

export default Block;