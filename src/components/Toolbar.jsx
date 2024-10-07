const Toolbar = ({onCreateClick}) => {
  return (
    <div className="mb-3 d-flex justify-content-between">
      <input 
        className="form-control w-25" 
        type="text" 
        placeholder="Search" 
        aria-label="default input example">
      </input>
      <button 
        type="button" 
        className="btn btn-primary"
        onClick={onCreateClick}
      >
        Create
      </button>
    </div>
  )
}

export default Toolbar