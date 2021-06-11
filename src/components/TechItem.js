import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
    return (
        <li >{tech} =
        <button type="button" onClick={onDelete}>Remover</button>
       </li>
    );

};

// Definindo as Props Default em uma function:
TechItem.defaultProps = {
    tech: '',
}

// Definindo Props Types em uma function:
TechItem.PropTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}

export default TechItem;