import React from 'react';
import ReactDOM from 'react-dom';
import ComponentOptions from './ComponentOptions'

describe('ComponentOptions Component', () => {
    it('renders without crashing',()=>{
        const div = document.createElement('div');
        ReactDOM.render(<ComponentOptions />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})