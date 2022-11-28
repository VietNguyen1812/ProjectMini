import React from 'react';
import PropTypes from 'prop-types';
import Image from '../TodoImage';

ImageList.propTypes = {
    albumList:PropTypes.array , 
};

ImageList.defaultProps = {
    albumList: [] ,
}

function ImageList(props) {
    const {albumList} = props
    return (
        <div className="list__img">
            <ul classname = "list__listImg">
                {albumList.map((element) => (
                    <li key= {element.id}>
                        <Image image = {element}></Image>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ImageList;