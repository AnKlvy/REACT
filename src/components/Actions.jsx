export const Actions = ({itemToDo,handleItemToDo, handleAddItem, handleKeyPress, handleClear}) => {

  

    return (
        <div className="item-add-form d-flex">
        <input
          value={itemToDo}
          
          onChange={handleItemToDo}
          // onSubmit={handleSubmit}
          type="text"
          className="form-control"
          placeholder="What needs to be done"
          onKeyDown={handleKeyPress}
        />
        <button className="btn btn-outline-secondary" 
        onClick={handleAddItem}
       >
          Add item
        </button>
        <button className="btn btn-outline"
        onClick={handleClear} >
Clear
        </button>
      </div>
      

    );
};