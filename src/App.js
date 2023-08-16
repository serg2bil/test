import React from "react";
import Context from "./contex";
import List from "./list/list";
import Add from "./list/Add";

function App() {
  const [itemsList, chen] = React.useState([
    { id: 1, completed: false, title: "item1" },
    { id: 2, completed: false, title: "item2" },
    { id: 3, completed: false, title: "item3" },
  ]);

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
        {itemsList.length ? <List items={itemsList} /> : <p>No item</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
