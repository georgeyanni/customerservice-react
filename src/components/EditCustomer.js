import { useState } from "react";

const initialCustomer={
    name:'',
    tel:'',
    gender:'',
    country:'',
    city:'',
    address:''
}

function EditCustomer(props){
    console.log(props.location.state)
    const [customer,setCustomer]=useState(props.location.state.customer);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(customer.name==="" ||customer.tel==="" || customer.country==="" ||customer.city==="" || customer.address==="")
        {
            alert("ALL the fields are mandatory!");
            return;
        }
       
        props.updateCustomerHandler(customer);
        setCustomer(initialCustomer);
        props.history.push("/");
        
    
    }
    return(
        <div className="col-md-4">
        <form  onSubmit={handleSubmit}> 
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text"className="form-control"
             value={customer.name} 
             onChange={(e)=>setCustomer({...customer,name:e.target.value})}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input type="text" className="form-control"
            value={customer.tel}
            onChange={(e)=>setCustomer({...customer,tel:e.target.value})}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Gender</label>
            <select  className="form-select" 
             value={customer.gender}
             onChange={(e)=>setCustomer({...customer,gender:e.target.value})}
            >
                <option>Male</option>
                <option>Female</option>
            </select>
        </div>
        <div className="mb-3">
            <label className="form-label">Country</label>
            <input type="text" className="form-control"
             value={customer.country}
             onChange={(e)=>setCustomer({...customer,country:e.target.value})}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">City</label>
            <input type="text" className="form-control"
             value={customer.city}
             onChange={(e)=>setCustomer({...customer,city:e.target.value})}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control"
             value={customer.address}
             onChange={(e)=>setCustomer({...customer,address:e.target.value})}
            />
        </div>
        <button type="submit" className="btn btn-primary">Edit Customer</button>
        </form>
        </div>
    );
}

export default EditCustomer;