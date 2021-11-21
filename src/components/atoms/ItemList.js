import React from 'react'

const ItemList = (props) => {
    const {data, onClick} = props;
    return (
        <div style={style.container} onClick={() => {
            onClick(data)
        }}>
            {data.title}
        </div>
    )
}

const style =  {
    container : {
        background : 'white',
        padding : '20px 30px',
        borderRadius : 15,
        cursor : 'pointer',
        marginBottom : 10
    },
}
export default ItemList
