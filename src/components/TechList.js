import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
    // Definindo a Default Props dentro de uma classe: 
    static defaultProps = {
        tech: ''
    };

    // Definindo a Prop Types dentro de uma classe: 
    static propTypes = {
        tech: propTypes.string;
    };


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

    handleDelete  = (tech) => {
        this.setState({ techs: this.state.techs.filter(elem => elem !== tech)});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                  {this.state.techs.map(tech => (
                     <TechItem  
                     key={tech} 
                     tech={tech}
                     onDelete={() => this.handleDelete(tech)}
                     />
                     ))}
                     <TechItem />
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