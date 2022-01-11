import React,{useState,useEffect} from 'react';
import data from '../../Data/Orders.json'

const Orders = ()=>{
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [orderData,SetData] = useState([]);
    const [searchData,SetSearch] = useState('');

    const getData=()=>{
      SetData(data);
        
      }
      const  handleChange= (e)=>{
        e.preventDefault();
        // console.log(e.target.value)
        if(searchData!==""){
            const newdata =  data.filter(a=>a.Order_ID.trim()===searchData.trim());
           SetData(newdata);
        }
        else{
            SetData(data);
        }
       
       
      } 
    
      
      const compareDate = (e)=>{
          e.preventDefault();
        if(toDate!==""&&fromDate!==""){
        const start = new Date(fromDate);
        const end = new Date(toDate);
        
        const newData = data.filter(a=>new Date(a.Order_Created)>=start&& new Date(a.Order_Created)<=end)
    
       SetData(newData);
        }
      }
    //   compareDate();
      useEffect(()=>{
        getData()
       
        
      },[])
  
//    console.log(fromDate,toDate)
    return(
        <>
        
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <form onSubmit={compareDate}>
         <div className="d-flex ">
      <div className="col-sm-10" >
        <div className="form-group">
          <span style={{ opacity: "0.6", fontSize: "17px" }}>from</span>
          <input
            type="date"
            name="from"
            id="startdate"
            value={fromDate}
            onChange={e=>setFromDate(e.target.value)}
            className="form-control datepicker"
            style={{ width: "150px" }}
          />
        </div>
      </div>
      <div className="col-sm-8">
        <div className="form-group">
          <span style={{ opacity: "0.6", fontSize: "17px" }}>to</span>
          <input
            type="date"
            name="to"
            min={fromDate}
            id="enddate"
            value={toDate}
            placeholder="Select Date"
            onChange={e => setToDate(e.target.value)}
            className="form-control datepicker"
            style={{ width: "150px" }}
          />
        
        </div>
        
      </div>
      <div className="col-sm-8">
        <div className="form-group">
      <input style={{borderRadius:"50%", height:"50px",marginTop:"15px"}}  type="submit" value="Filter"/>
      </div> 
      </div> 


    </div> 
    
    </form>
    <form onSubmit={handleChange}>
    <div style={{position:'absolute',right:'120px'}} className="form-group">
      <span style={{ opacity: "0.6", fontSize: "17px",marginRight:'10px' }}>Search</span>
      <input
      style={{height:"30px"}}
         type="search"
         name="search-form"
         id="search-form"
         onChange={(e)=>SetSearch(e.target.value)
        
        }
         className="search-input"
         placeholder="Search for Order ID"></input>
    </div> 
    <input style={{position:'absolute',right:'20px',borderRadius:"50%",height:"35px"}} type="submit" value="Search"/>     
    </form>                                                                                                                                       
        </nav>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Order ID</th>
      <th scope="col">Vendor Name</th>
      <th scope="col">Order Created Date</th>
      <th scope="col">Status</th>
      <th scope="col">Start Time</th>
      <th scope="col">End Time</th>
    </tr>
  </thead>
  <tbody>
      {orderData.map(a=>(
        <tr key={a.Order_ID}>
        <th>{a.Order_ID}</th>
        <td>{a.Vendor_Name}</td>
        <td>{a.Order_Created}</td>
        <td>{a.Status}</td>
        <td>{a.Start_Time}</td>
        <td>{a.End_Date}</td>
      </tr>
      ))}
    
   
   
  </tbody>
</table>
        </>
    );
}
export default Orders;