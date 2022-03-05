import { Link } from "react-router-dom"; 

function Customer(props)
{
    const item = props.details;
    

    const iconDelete = {
        color: "red",
        fontSize: '23px',
        cursor: 'pointer'
    }

    const iconEdit = {
        color: "green",
        fontSize: '23px',
        cursor: 'pointer'
    }
return(
    
                <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                     <div className="card-block text-center m-3">
                     <Link to={{ pathname: `/edit`, state: { customer:item } }}>
                      <i className="fa fa-pencil me-3" aria-hidden="true"
                       style={iconEdit}

                       ></i>
                       </Link>
                       <i className="fa fa-trash-o ml-1" 
                      style={iconDelete}
                      onClick={() => props.deleteHandler(item.id)}

                      ></i>
                    
                    </div>
                  <div className="card-body">
                    <h6 className="card-title text-center ">Name :{item.name} </h6>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                     Mobile: {item.tel}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                     Gender: {item.gender}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                     Country: {item.country}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                     City: {item.city}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                     Adress: {item.address}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                     Id: {item.id}
                    </h6>
                  </div>
                </div>
            

);
}
export default Customer;