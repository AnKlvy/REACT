  // button-group
  const buttons = [
    {
      type: "all",
      label: "All",
    },
    {
      type: "active",
      label: "Active",
    },
    {
      type: "done",
      label: "Done",
    },
    
  ];

  // const handleSubmit =(e)=> {
  //   e.preventDefault()
  //   if (value.length === 0) {
  //     return;
  //   }
  // };

export const TopPanel = ({type, handleChangeStatus}) => {

    return (
        <div className="top-panel d-flex">
        {/* Search-panel */}
        <input
          type="text"
          className="form-control search-input"
          placeholder="type to search"
          
        />
        {/* Item-status-filter */}
        <div className="btn-group">
          {buttons.map((itemB) => (
            <button
              key={itemB.type}
              type="button"
              // type
              className={`btn btn${type === itemB.type ? "" : "-outline"}-info`}
              onClick={() => handleChangeStatus(itemB.type)}
            >
              {itemB.label}
            </button>
          ))}
        </div>
      </div>
    )
}