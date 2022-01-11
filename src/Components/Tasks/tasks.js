import React,{useState,useEffect} from 'react'
import data from '../../Data/Data.json'


const Tasks = ()=>{
    const [TaskData,SetTaskData] = useState([]);
    const [updateData,setUpdateData]= useState({Task:"",Id:"",Status:"Approved",Vendor:"",key:""});
    
    const handleUpdate = (a)=>{
        setUpdateData(a);
      
    }
    const getAll=()=>{
        SetTaskData(data);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // setUpdateData((state)=>({...updateData,Status:"Approved"}));
        const data =  updateData;
        if(data.Id.trim()==="null"||data.Id.trim()===""){
            data.Status="Rejected"
        }
        else{
        data.Status="Approved"
        }
        const temp = TaskData.filter(a=>a.Task!==data.Task);
        
        console.log(updateData)
      temp.unshift(updateData);
    
        SetTaskData(temp);
       
    }
    useEffect(()=>{
        getAll()
       
        
      },[])
    return(
        <>
     <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Id</th>
      <th scope="col">Bussiness Key</th>
      <th scope="col">Approved</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
   
  {TaskData.map(a=>(
       <tr key={a.Task}>
       <td>{a.Task}</td>
       <td>{a.Id}</td>
       <td>{a.key}</td>
       <td>{a.Status}</td>
       <td> <button onClick={()=>handleUpdate(a)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         Update
         </button></td>
      
     </tr>
    ))} 
    
  </tbody>
</table>
<div className="container p-5">
        
        
         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
               <h5 className="modal-title text-danger" id="exampleModalLabel">Update Task</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
               <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                     <label htmlFor="exampleInputEmail1" className="form-label">ID</label>  
                     <input defaultValue={updateData.Id} onChange={(e)=>setUpdateData((state)=>({...state,Id:e.target.value}))}  type="text" className="form-control"  id="Id" aria-describedby="emailHelp" />
                   
                  </div>
                  <div className="mb-3">
                     <label htmlFor="exampleInputPassword1" className="form-label">Vendor Name</label>
                     <input defaultValue={updateData.Vendor} onChange={(e)=>setUpdateData((state)=>({...state,Vendor:e.target.value}))} type="text"  className="form-control" id="Vendor" />
                  </div>
                  <button type="submit" className="btn btn-primary">Update</button>
                  <button type="button" className="btn btn-warning float-xl-end" data-bs-dismiss="modal">Close</button>
               </form>
               </div>
              
            </div>
         </div>
         </div>
         </div>
        </>
    );
}
export default Tasks;