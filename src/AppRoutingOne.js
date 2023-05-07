import {BrowserRouter as Router, Route, Routes, Link, Navigate, useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import HomePage from './pages/home/homePage';
import Page404 from './pages/error/page404';
import AboutPage from './pages/about/aboutPage';
import ProfilePage from './pages/profile/profilePage';
import TaskPage from './pages/tasks/taskPage';
import TaskDetailPage from './pages/tasks/taskDetailPage';
import LoginPage from './pages/auth/loginPage';
import { useState } from 'react';
import { Task } from './models/task.class';
import { Levels } from './models/levels.enums';
import { useEffect } from 'react';
import PropsPage from './pages/home/propsPage';

function AppRoutingOne() {
  const defaultTask=new Task("Example 1","Default description",false,Levels.NORMAL);
  const defaultTask2=new Task("Example 2","Default description",true,Levels.URGENT);
  const defaultTask3=new Task("Example 3","Default description",false,Levels.BLOCKING);

  const taskList=[defaultTask, defaultTask2,defaultTask3];
  const [tasks, setTasks] = useState(sessionStorage.getItem("tasks")!==null?JSON.parse(sessionStorage.getItem("tasks")):  taskList);
  useEffect(() => {
    sessionStorage.setItem("tasks",JSON.stringify(tasks))
  }, [tasks]);
  const TaskDetailWrapper=()=>{
    const {id}=useParams();
    if (id>tasks.length) {
      return(
        <Page404></Page404>
      )
    }
    return(
      <TaskDetailPage task={tasks[id-1]}></TaskDetailPage>
    )
  }
  const [credentials, setCredentials] = useState(sessionStorage.getItem('credentials'));
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faq'>| FAQ |</Link>
          <Link to='/notExisting'>| This link is broken |</Link>
          <Link to='/login'>| Login |</Link>
        </aside>
      </div>
      <main>
        <Routes>
          <Route exact path='/' Component={HomePage}/>
          <Route exact path='/about' Component={AboutPage}/>
          <Route exact path='/faq' Component={AboutPage}/>
          <Route exact path='/login' element={
            credentials?
            <Navigate to='/' replace/>
            :
            <LoginPage setCredentials={setCredentials}/>
          }/>
          <Route exact path='/profile' element={
            credentials?
            <ProfilePage/>
            :
            <Navigate to='/login' replace/>
            
          }>
          
          </Route>
          <Route exact path='/tasks' element={
            <TaskPage taskList={tasks} setTasks={setTasks}></TaskPage>
          }/>
          <Route exact path='/tasks/:id' element={
            credentials?
            <TaskDetailWrapper></TaskDetailWrapper>
            :
            <Navigate to='/login' replace/>
          }/>
          <Route path='/demoProps' Component={PropsPage}/>
          <Route path='*' Component={Page404}/>
        </Routes>
      </main>

    </Router>
  );
}

export default AppRoutingOne;
