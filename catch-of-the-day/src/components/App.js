import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';

import sampleFishes from '../sample-fishes';  
import base from '../base';

class App extends React.Component {
    state = {
        fishes : {},
        order: {},
    }

    static propTypes = {
        match : PropTypes.object
    }  
    
    componentDidMount() {
        const { params } = this.props.match;
        // Reinstate the local storage - after ComponentDidUpdate step
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {
            this.setState({ order : JSON.parse(localStorageRef) });
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: "fishes"
        });        
    }

    componentDidUpdate() {
        const { params } = this.props.match;
        localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = (fish) => {
        //1. Take a copy of the existing state.
        const fishes = {...this.state.fishes};
        // 2. Add our new fishes to the fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({fishes: fishes});
    };

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    };

    addToOrder = (key) => {
        // 1. take a copy of state
        const order  = {...this.state.order};
        // 2. Either add to the order or update the number in  the order
        order[key] = order[key] + 1 || 1 ;
        // 3. Call setState to update our state object
        this.setState({order: order });
    };
    
    updateFish = (key, updateFish) => {
        const fishes = {...this.state.fishes};
        // Update that state
        fishes[key] = updateFish;
        // Set the updatefish to the state
        this.setState({fishes: fishes});
        
    };

    deleteFish = (key) => {
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        this.setState({fishes : fishes});
    };

    removeFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key] ;
        this.setState({order : order});
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header quote="Fresh Sea Food"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => 
                            <Fish 
                            key={key}
                            index = {key} 
                            details={this.state.fishes[key]} 
                            addToOrder={this.addToOrder}
                        />
                        )}
                    </ul>
                </div>
                <Order 
                    fishes={this.state.fishes} 
                    order={this.state.order}
                    removeFromOrder = {this.removeFromOrder}
                />
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes}
                    fishes = {this.state.fishes}
                    updateFish = {this.updateFish}
                    deleteFish = {this.deleteFish}
                />
            </div>
        );
    }
}

export default App;