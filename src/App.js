import React, {useEffect} from "react";
import Context from "./contex";
import List from "./list/list";
import Add from "./list/Add";
import Load from "./list/load";

function App() {
  const [itemsList, chen] = React.useState([]);
  const [loading, setLoading] =   React.useState(true)
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(itemsList => {
            setTimeout(() =>{
                chen(itemsList)
                setLoading(false)
            }, 2000)

            
        })

  }, [])

  function toggle(id) {

    chen(
      itemsList.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  }
  function removeItem(id) {
    chen(itemsList.filter((item) => item.id !== id));
  }
  function addlist(title) {
    chen(itemsList.concat([{ id: Date.now(), completed: false, title }]));
  }
  return (
    <Context.Provider value={{ removeItem, toggle }}>
      <div className="t1">
        <Add onCreate={addlist} />
        
        <h1>test</h1>
        {itemsList.length || loading ? <List items={itemsList} /> : <p>No item</p>}
        {loading && <Load/>}
      </div>
    </Context.Provider>
  );
}

export default App;
