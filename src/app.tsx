import React from 'react';
import ReactDOM from 'react-dom';
import { CraftyCalcContainer } from './components/CraftyCalcContainer';


const CraftyCalc: React.FC = () => {
    return (
        <CraftyCalcContainer />
    );
}

ReactDOM.render(<CraftyCalc />,document.getElementById('app'));