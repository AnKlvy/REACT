export const Buttons = ({buttonType,onClick,id}) => {

    return (
        
        <button
        type="button"
        className={`btn btn-outline-${buttonType? "success" : "danger"} btn-sm float-right`}
        onClick={()=>onClick(id)}
        >
        <i className={`fa fa-${buttonType? "exclamation": "trash-o"}`} />
      </button>
      
    );
};