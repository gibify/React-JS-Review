import React, { Component } from 'react';

class TechList extends Component {
    state = {
        techs: [
            'Node',
            'React',
            'React Native'
        ],
    };

    render() {
        console.log(this.state)
        return (
            <ul>
                <li>Node</li>
                <li>React</li>
                <li>React Native</li>
            </ul>
        )
    }
}

export default TechList;