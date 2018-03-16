import React from 'react';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import { getFunName } from '../helpers';

class App extends React.Component {
    state = {
        fishes : {},
        order: {},
    }

    addFish = (fish) => {
        console.log(fish);
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header  tagline="Is cool" age={500} cool={true} quote={getFunName()}/>
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        );
    }
}

export default App;