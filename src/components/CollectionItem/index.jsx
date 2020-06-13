import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import CustomButton from '../CustomButton';
import './collection-item.style.scss';

const CollectionItem  = ({item,addItem}) =>{
    const { name, price, imageUrl } = item;
    return(
        <div className="collection-item">
            <div className="image"
                style ={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
            </div>
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItem : item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);