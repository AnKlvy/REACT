import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { AppHeader } from "./components/AppHeader";
import { TopPanel } from "./components/TopPanel";
import { ListGroup } from "./components/ListGroup";
import { Actions } from "./components/Actions";



// const itemsData = [
//   {
//     key: uuid(),
//     label: "Have fun",
//   },
//   {
//     key: uuid(),
//     label: "Spread Empathy",
//   },
//   {
//     key: uuid(),
//     label: "Generate Value",
//   },
//   {
//     key: uuid(),
//     label: /* JSON.parse(localStorage.getItem("localTasks"))
//     ?  */localStorage.getItem("localTasks").label
//     /* : "no local storage available" */
//   }

// ];



function App() {
  const [itemToDo, setItemTodo] = useState("");
  const [items, setItems] = useState([]);
  const [type, setType] = useState("all");
  const [type2, setType2] = useState("all");
  
  useEffect(()=>{
    if(localStorage.getItem("localTasks")){
      const storedList= JSON.parse(localStorage.getItem("localTasks"));
      setItems(storedList);
    }
  }, []);

  const handleItemToDo = (event) => {
    setItemTodo(event.target.value);
  };

  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
      handleAddItem()
    }
  }
    
/* localStorage.clear() */
  const handleAddItem = () => {
if(itemToDo){
      const newObj = { key: uuid(), label: itemToDo };

    setItems([newObj, ...items]);
    localStorage.setItem("localTasks", JSON.stringify([newObj, ...items]));
    setItemTodo("")
}

   
    
  };

  const handleItemDone = (key) => {
    const newArray = items.map((item) => {
      if (item.key === key) {
        return { ...item, isDone: !item.isDone };
      } else return item;
    });
    setItems(newArray);
  };

    const handleItemImp = (key) => {
      const newArray = items.map((item) => {
        if (item.key === key) {
          return { ...item, isImp: !item.isImp };
        } else return item;
      });
      setItems(newArray);
    
  };

  const handleChangeStatus = (type) => {
    setType(type);
  };

  const handleChangeStatus2 = (type2) => {
    setType2(type2);
  };


  const handleDelete =(key)=>{
const deleted = items.filter((item)=>item.key !==key)
setItems(deleted);
localStorage.setItem("localTasks", JSON.stringify(deleted));    
  }

  const handleClear= () =>{
    setItems([]);
    localStorage.removeItem("localTasks")
  }

  const doneItems = items.filter((item) => item.isDone);
  const notDoneItems = items.filter((item) => !item.isDone);
  // const impItems = items.filter((item) => item.isImp);
  // const notImpItems = items.filter((item) => !item.isImp);

  const filteredItems =
    type === "active" ? notDoneItems : type === "done" ? doneItems : items
  
    
   

  return (
    <div className="todo-app">
      <AppHeader doneItems={doneItems} notDoneItems={notDoneItems} />

      <TopPanel  type={type} handleChangeStatus={handleChangeStatus}  handleChangeStatus2={handleChangeStatus2} />

      <ListGroup filteredItems={filteredItems} handleItemDone={handleItemDone} handleItemImp={handleItemImp} handleDelete={handleDelete}/>

      <Actions itemToDo={itemToDo} handleItemToDo={handleItemToDo} handleAddItem={handleAddItem} handleKeyPress={handleKeyPress} handleClear={handleClear} />
      {/* <button onClick={localStorage.clear()}>Clear storage</button> */}
     </div>
  );
}

export default App;
