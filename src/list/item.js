import React, {useContext} from 'react'
import Context from '../contex'
const styles = {
    li: {
        border: "2px solid black",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px', 
        marginBottom: '.5rem'
        
        
      },
      input:{
        marginRight: "15px",
        marginLeft: "20px",
        padding: "1px"
      },
      num: {
        

      }
}

function Item({ item1, index }) {
    const { removeItem, toggle }= useContext(Context)
    const classes = []
    if (item1.completed){
        classes.push('done')
    }
    return ( 
    <li style={styles.li}>
        <div className={classes}>
        <span style={styles.num}>{ index + 1 }:</span>    
        <input 
        checked={item1.completed}
        type='checkbox'  
        style={styles.input}  
        onChange={toggle.bind(null, item1.id) 
        
        
        }/>
        <strong>

        
        </strong> 
        <span>{ item1.title }</span>
        </div>
        <button onClick={removeItem.bind(null, item1.id)}>&times;</button>
    </li>
    )
}


export default Item;

