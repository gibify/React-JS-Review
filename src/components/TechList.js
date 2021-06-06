import React, { Component } from 'react';

class TechList extends Component {
    state = {
        newTech: '',
        techs: [
            'Node',
            'React',
            'React Native'
        ],
    };
    // Sempre escrever a funcão no formato de Array function dentro das classes no React-JS
    handleInput = e => {
        this.setState({ newTech: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ 
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                  {this.state.techs.map(tech => (
                      <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <input 
                    type="text" 
                    onChange={this.handleInput}
                    value={this.state.newTech}
                />
                <button type="submit" >Adicionar</button>
            </form>
        )
    }
}

export default TechList;