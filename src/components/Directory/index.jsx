import React from 'react';
import './directory.style.scss';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selector'
import MenuItem from '../MenuItem'

const Directory = ({sections}) => {
        return(
            <div className="directory-menu">
                {sections.map(({id, ...ortherSectionsProps}) =>(
                    <MenuItem 
                        key={id} 
                        {...ortherSectionsProps}
                    />
                ))}
            </div>
        )
}

const mapStateToProps =  createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);