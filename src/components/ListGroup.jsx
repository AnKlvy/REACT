import React from "react"
import { Buttons } from "./Buttons"

export const ListGroup = ({filteredItems, handleItemDone,handleItemImp,handleDelete })=>{

    return(
<ul className="list-group todo-list">
{filteredItems.map((item) => (
   <React.Fragment key={item.key}>
  <li
 
    
    className="list-group-item"
  >
    <span className={`todo-list-item ${item.isDone ? "done" :""} ${item.isImp ? "important":""}`}>
      
      <span className="todo-list-item-label"   onClick={() => handleItemDone(item.key)}
  >{item.label}</span>

    <Buttons buttonType={true}  onClick={handleItemImp} id={item.key}/>
    <Buttons buttonType={false} onClick={handleDelete} id={item.key}/>
    </span>
    
  </li>
  </React.Fragment>
))}

</ul>

    )
}