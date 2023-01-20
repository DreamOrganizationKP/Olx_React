
const SearchComponent = () =>{
    return(<>
    <div className="container">

<div className="row height d-flex justify-content-center align-items-center">

  <div className="col-md-8">

    <div className="search">
      <i className="fa fa-search"></i>
      <input type="text" className="form-control" placeholder="Search something you wanna buy..."></input>
      <button className="btn btn-primary">Search</button>
    </div>
    
  </div>
  
</div>
</div>
    </>);
}

export default SearchComponent;