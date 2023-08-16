import React from 'react'
import Item from './item'

const styles = {
    ul: {
        listStyle: 'none',
        margin: "auto",
        maxWidth: '350px'

    }

    
}

export default function ({items, onToggle}) {
    return(
        <ul style={styles.ul}>
            
           { items.map((item, index) => {
                return<Item item1={item} key={item.id} index={index} />
            }) }
        </ul>
    )
    
}
