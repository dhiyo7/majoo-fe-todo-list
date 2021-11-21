import React from 'react'
import ItemList from '../atoms/ItemList'

const List = (props) => {
    const {title, data, variant, onClick, clickAdd} = props;
    return (
        <div style={style.container}>
            <div style={style.header}>
                <h1 style={style.title}>{title}</h1>
            </div>
            {data && data.map((item) => {
                return (
                    <ItemList onClick={onClick} data={item} />
                )
            })}
            {variant === 'not_finished' && (
                <div style={style.footer}>
                    <div style={style.buttonAdd} onClick={clickAdd}> Tambah  </div>
                </div>
            )}
        </div>
    )
}

const style = {
    container : {
        width :  300,
        borderRadius : 20,
        backgroundColor : '#e9e9e9',
        padding : '10px 20px',
        marginRight : 20
    },
    header : {
        width : '100%',
        height : 50
    },

    title : {
        fontSize: 24,
        fontWeight : 'bold'
    },
    footer: {
        paddingTop : 8,
        height: 50,
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    },
    buttonAdd : {
        cursor : 'pointer',
        borderRadius : 20,
        padding: '10px 20px',
        backgroundColor : 'lightBlue'
    }
}

export default List
