import React, {Component} from 'react';
import {TagCloud} from "react-tagcloud";
import {Button} from "semantic-ui-react";

class ResultSet extends Component {
    render() {
        const {result} = this.props;
        return (
            <div>
                <Button content='Back' icon='left arrow' labelPosition='right' style={{marginBottom: "30px"}} onClick={() => window.location.reload()}/>
                <TagCloud
                    tags={result}
                    minSize={1}
                    maxSize={3}
                    renderer={customRenderer}
                />
            </div>
        );
    }
}

const customRenderer = (tag, size, color) => (
    <span key={tag.value}
          style={{
              animation: 'blinker 3s linear infinite',
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${size}em`,
              border: `2px solid ${color}`,
              margin: '3px',
              padding: '15px',
              display: 'inline-block',
              color: 'black',
          }}>{tag.value}</span>
);

export {ResultSet}