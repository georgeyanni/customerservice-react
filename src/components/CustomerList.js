import Customer from './Customer';
import ReactPaginate from 'react-paginate'; 
import { Link } from "react-router-dom"; 

function CustomerList(props){
    const items =props.customers;
    const handlePageClick = props.handlePageClick;
    console.log(items)
    return(
       <>
       <h2>
           Cutomers
           <Link to="/add">
            <button className='btn btn-primary m-2'>Add New Customer</button>
           </Link>
       </h2>
      
        <div className="row m-2">
          {items.data.map((item) => {
            return (
              <div key={item.id} className="col-sm-6 col-md-4 v my-2">
            
              <Customer details={item} deleteHandler={props.deleteHandler} updateCustomerHandler={props.updateCustomerHandler}/>
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
</>
    )
}

export default CustomerList;