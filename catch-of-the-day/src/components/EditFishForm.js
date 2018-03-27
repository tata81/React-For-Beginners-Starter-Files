import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,            
        }),
        index: PropTypes.string.isRequired,
        updateFish: PropTypes.func.isRequired,
    }       
    handleChange = (e) => {
        const updatedFish = {
            ...this.props.fish,
            [e.currentTarget.name]: e.currentTarget.value
        };
        this.props.updateFish(this.props.index , updatedFish);
    }
    
    render() {
        return(
            <form className="fish-edit">
                <input type="text" name="name" placeholder="Name" value={this.props.fish.name} onChange={this.handleChange}/>
                <input type="text" name="price" placeholder="Price" value={this.props.fish.price} onChange={this.handleChange} />
                <select name="status" type="text" value={this.props.fish.status} onChange={this.handleChange}>
                    <option value="avaliable">Fresh!</option>
                    <option value="unavaliable">Sold Out!</option>
                </select>
                <textarea name="desc"  placeholder="Desc" value={this.props.fish.desc} onChange={this.handleChange}/>
                <input type="text" name="image" placeholder="Image" value={this.props.fish.image} onChange={this.handleChange}/>
                <button onClick={() => this.props.deleteFish(this.props.index)}> - Delete Fish</button>
            </form>
        );
    }
}

export default EditFishForm;