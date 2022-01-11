import React,{useState,useEffect} from 'react'
import data from '../../Data/Data.json'


const Tasks = ()=>{
    const [TaskData,SetTaskData] = useState([]);
    const [updateData,setUpdateData]= useState({Task:"",Bussiness_key:{Id:"",Vendor:"",key:""}});
    
    const handleUpdate = (a)=>{
        setUpdateData(a);
       
    }
    const getAll=()=>{
        SetTaskData(data);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
       
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
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
   
  {TaskData.map(a=>(
       <tr key={a.Task}>
       <td>{a.Task}</td>
       <td>{a.Bussiness_key.Id}</td>
       <td>{a.Bussiness_key.key}</td>
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
                     <label htmlFor="exampleInputEmail1" className="form-label">ID: {updateData.Bussiness_key.Id}</label>  
                     <input onChange={(e)=>setUpdateData((state)=>({...state,Id:e.target.value}))}  type="text" className="form-control"  id="Id" aria-describedby="emailHelp" />
                   
                  </div>
                  <div className="mb-3">
                     <label htmlFor="exampleInputPassword1" className="form-label">Vendor Name</label>
                     <input disabled type="text" value={updateData.Bussiness_key.Vendor} className="form-control" id="Vendor" />
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