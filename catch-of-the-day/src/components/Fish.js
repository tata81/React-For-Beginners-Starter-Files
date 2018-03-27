import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    static propTypes = {
        addToOrder: PropTypes.func,
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number,
        }),
    }
    render() {
        const {image, name, price, desc, status} = this.props.details;
        const isAvailable = status ===  "available";
        return(
            <div>
                <li className="menu-fish">
                    <img src={image} alt={name} />
                    <h3 className="fish-name">
                        {name}
                        <span className="price">{formatPrice(price)}</span>                    
                    </h3>
                    <p>{desc}</p>
                    <button 
                        disabled={!isAvailable}
                        onClick={() => this.props.addToOrder(this.props.index)}
                    >
                        {isAvailable ? "Add to order" : "Soldout"}                        
                    </button>
                </li>
            </div>
        );
    }
}

export default Fish;