export const AppHeader = ({doneItems, notDoneItems})=> {
    return(
        <div className="app-header d-flex">
        <h1>Todo List</h1>
        <h2>
          {notDoneItems.length} more to do, {doneItems.length} done
        </h2>
      </div>
    )
} 