import React from 'react'

import './collection-overview.style.scss'


import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import Collection from '../../components/Collection'


const CollectionOverview = ({collections}) =>(
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps}) =>(
                <Collection key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);

