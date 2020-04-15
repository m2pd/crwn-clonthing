import React from 'react'

import SHOP_DATA from './Shop.data'

import Collection from '../../components/Collection'

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            collections : SHOP_DATA
        };
    }

    render(){
        const { collections } =  this.state;
        return (<div className="shop-page">
                {
                    collections.map(({ id, ...otherCollectionProps}) =>(
                        <Collection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;