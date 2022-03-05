
import { useState,useEffect } from 'react';
import ReactPaginate from 'react-paginate';  
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";   
import Customer from './Customer';
import AddContact from "./AddContact";
import './App.css';
import CustomerList from './CustomerList';
function App() {
const [items,setItems]=useState([]);
const [isLoading, setIsLoading] = useState(true);

  let pageSize = 10;

  useEffect(()=>{
    
    const getCustomers=async()=>{
      const res = await fetch(
        `https://localhost:44380/api/Customers?PageNumber=1&PageSize=${pageSize}` 
      );
      const data = await res.json();
      setItems(data);
      setIsLoading(false);
    };

    getCustomers();
   
  },[]);

  
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
    setItems(customersFormServer);
  }

  if (isLoading) {
   
    return <div>Loading...</div>;
  }
  
  return (
    <div className="container">
        
      

       
        <div className="row m-2">
        <button className='btn btn-primary m-2'>Add New Customer</button>
         <CustomerList customers={items} />
          {items.data.map((item) => {
            return (
              <div key={item.id} className="col-sm-6 col-md-4 v my-2">
            
              <Customer Details={item}/>
              </div>
            );
          })}
        </div>

    <ReactPaginate
    previousLabel={'previous'}
    nextLabel={'next'}
    breakLabel={'...'}
    pageCount={items.totalPages}
    marginPagesDisplayed={2}
    pageRangeDisplayed={3}
    onPageChange={handlePageClick}
    containerClassName={'pagination justify-content-center'}
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextClassName={'page-item'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}
    />

   </div>
  );
}

export default App;
