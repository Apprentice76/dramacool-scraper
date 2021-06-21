import React from 'react'

const Title = (props) => {
    const title = props.title;
    return (
        <div className='item'>
            <img src={title['img']} alt={title['title']} />
            <p>{title['title']}</p>
        </div>
    );
}

export default Title
