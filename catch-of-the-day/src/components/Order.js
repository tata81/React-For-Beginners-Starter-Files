import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { formatPrice } from '../helpers';

class Order extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        order: PropTypes.object,
        removeFromOrder: PropTypes.func
    }
    
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];  
        const isAvailable = fish && fish.status === "available";
        
        if(!fish) return null;

        if(!isAvailable) {
            return (
                    <CSSTransition 
                        classNames="order" 
                        key={key} 
                        timeout={{ enter: 250, exit: 250 }}
                    >
                        <li key={key}>
                            Sorry {fish ? fish.name: 'fish'} is no longer available
                        </li>
                    </CSSTransition>              
            );

        }      
        return(
            <CSSTransition 
                classNames="order" 
                key={key} 
                timeout={{ enter: 250, exit: 250 }}
            >            
                <li key={key}>
                    <span>
                        <span className="count">
                            <span>{count}</span>
                        </span>
                        kgs &nbsp;  
                        {fish.name}
                        <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
                    </span>
                    <span className="price">{formatPrice(count * fish.price)}</span>
                </li>
            </CSSTransition>           
        );
    };
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable  = fish && fish.status === "available";
            if(isAvailable) {
                return prevTotal + (count  * fish.price);
            }
            return prevTotal;
        }, 0);

        return(
            <div className="order-wrap" >
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">{orderIds.map(this.renderOrder)}</TransitionGroup>
                <div className="total">
                    Total: 
                    <strong>
                        {formatPrice(total)}
                    </strong>
                </div>
            </div>
        );
    }
}

export default Order;