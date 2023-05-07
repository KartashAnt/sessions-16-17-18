import {BrowserRouter as Router, Route, Routes, Link, Navigate, useParams} from 'react-router-dom';
import Page404 from './pages/error/page404';
import LoginPage from './pages/auth/loginPage';
import Dashboard from './pages/dashboard/dashboard';
import { useState } from 'react';
import RegisterPage from './pages/auth/registerPage';
import TaskPage from './pages/tasks/taskPage';


function AppRoutingFinal() {
  const [credentials, setCredentials] = useState(sessionStorage.getItem('credentials'));
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={()=>
          credentials?
            (<Navigate to='/dashboard'/>)
            :
            (<Navigate to='/login'/>)
          }>
          
        </Route>
        <Route exact path='/login' Component={()=>
            credentials?
            (<Navigate to='/dashboard'/>)
            :
            (<LoginPage setCredentials={setCredentials}></LoginPage>)
        }/>
        <Route exact path='/dashboard' Component={()=>
          credentials?
            (<Dashboard setCredentials={setCredentials}></Dashboard>)
            :
            (<Navigate to='/login'/>)
        }/>
        <Route exact path='/register' Component={()=>
          credentials?
          (<Navigate to='/dashboard'/>)
          :
          (<RegisterPage></RegisterPage>)
        }/>
        <Route exact path='/tasks' Component={()=>
          credentials?
          <TaskPage></TaskPage>
          :
          (<Navigate to='/login'/>)
        }/>
        <Route path='*' Component={Page404}/>
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
