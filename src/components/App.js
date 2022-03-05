
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddCustomer from "./AddCustomer";
import api from '../api/CustomerServiceApi';
import './App.css';
import CustomerList from './CustomerList';
import EditCustomer from './EditCustomer';
function App() {
const [customers,setCustomers]=useState([]);
const [isLoading, setIsLoading] = useState(true);


  let pageSize = 10;

  useEffect(()=>{

    const getCustomers=async()=>{
      const res = await fetch(
        `https://localhost:44380/api/Customers?PageNumber=1&PageSize=${pageSize}`
      );
      const data = await res.json();
      setCustomers(data);
      setIsLoading(false);
    };

    getCustomers();

  },[]);

  const addCustomerHandler=async(customer)=>{
    console.log(customer);
     const resp=await api.post("/customers", customer);

    setCustomers({...customers,data:[  ...customers.data, resp.data]});

  }

  const updateCustomerHandler=async(customer)=>{

    const response = await api.put(`/customers/${customer.id}`, customer);

    var updatedCustomers=customers.data.map((item) => {
      return item.id === customer.id ? { ...response.data } : item;
    });
    console.log(updatedCustomers)
    setCustomers({...customers,data:[ ...updatedCustomers]});

  }

  const deleteHandler=async(id)=>{

    await api.delete(`/customers/${id}`);
   console.log(customers.data);

    const newCustomerList = customers.data.filter(customer => customer.id !== id);

    console.log(newCustomerList);
    setCustomers({...customers,data:[ ...newCustomerList]});

    console.log(newCustomerList);
  }

  const fetchCustomers = async (currentPage) => {

    const res = await fetch(
      `https://localhost:44380/api/Customers?PageNumber=${currentPage}&PageSize=${pageSize}`

    );
    const data = await res.json();

    return data;
  };

  const handlePageClick=async(data)=>{
    let currentPage = data.selected + 1;
    const customersFormServer = await fetchCustomers(currentPage);
    setCustomers(customersFormServer);
  }

  if (isLoading) {

    return <div>Loading...</div>;
  }

  return (
    <div className="container">

       <Router>
         <Switch>
           <Route
           path='/'
           exact
           render={(props)=>(
            <CustomerList
            {...props}
            customers={customers}
            deleteHandler={deleteHandler}
            handlePageClick={handlePageClick}/>
           )}
           />
           <Route
           path='/add'
           render={(props)=>(
            <AddCustomer {...props} addCustomerHandler={addCustomerHandler}/>
           )}

           />


         <Route
            path="/edit"
            render={(props) => (
              <EditCustomer
                {...props}
                updateCustomerHandler={updateCustomerHandler}
              />
            )}
          />
         </Switch>

         </Router>
   </div>
  );
}

export default App;
