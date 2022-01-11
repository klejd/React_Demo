
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Header from './Components/Common/Header';
import Tasks from './Components/Tasks/tasks';
import Orders from './Components/Orders/orders';

function App() {
  return (
    <BrowserRouter >

    
      <div className="container-fluid">
        <Header/>
      <Switch>
       <Route exact path="/" component={Orders}></Route> 
      <Route exact path="/tasks" component={Tasks}></Route>
      
      <Route  component={NotFoundPage}></Route>
      </Switch>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
