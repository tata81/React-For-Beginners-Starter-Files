import React from 'react';

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (e) => {
        // 1. Stop a form from submitting
        e.preventDefault();
        // 2. 
        const fish = {
            nameRef : this.nameRef.value.value,
            priceRef : parseFloat(this.priceRef.value.value)  ,
            statusRef : this.statusRef.value.value,
            descRef : this.descRef.value.value,
            imageRef : this.imageRef.value.value,           
        }
        this.props.addFish(fish);
        e.currentTarget.reset();
    };

    render() {
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" name="name" ref={this.nameRef} placeholder="Name" />
                <input type="text" name="price" ref={this.priceRef} placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="avaliable">Fresh!</option>
                    <option value="unavaliable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc" />
                <input type="text" name="image" ref={this.imageRef} placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;