import React,{useState,  useHistory} from 'react'
import {Header} from './Header'
import Appp from './Appp'
import {auth, db} from '../Config/Config'
import { Todos } from './Todos';
import { Modal } from './Modal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import WbSunny from '@material-ui/icons/WbSunny';
import Star from '@material-ui/icons/Star';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Person from '@material-ui/icons/Person';
//import Add from "@material-ui/icons/Add";
import AddAlert from '@material-ui/icons/AddAlert';
import EventAvailable from '@material-ui/icons/EventAvailable';
import Login  from './Login'
import {Link} from 'react-router-dom'
import './Home.css';

export const Welcome = ({currentUser, todos, deleteTodo,
editTodoValue, editModal, updateTodoHandler}) => {

  const [todo, setTodo]=useState('');
  const [todoError, setTodoError]=useState('');

  const handleTodoSubmit=(e)=>{
    e.preventDefault();
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('todos of ' + user.uid).add({
          Todo: todo
        }).then(setTodo('')).catch(err=>setTodoError(err.message))
      }
      else{
        console.log('user is not signed in to add todo to database');
      }
    })
  }



    return (
        <div className='wrapper'>
       
          <div className='container'>
            <form autoComplete='off' className='form-group'
            onSubmit={handleTodoSubmit}>

            {currentUser&&<div >

              <Header currentUser={currentUser}/>
               <Appp/>
            

            </div>}

            {!currentUser&&<>
              
              <div className="welcome" >


         <h1 className="heading">HELLO & WELCOME </h1>


         <h3 style={{color:"white"}}>I am excited to have you get started</h3>
         
        
        

         <Link style={{cursor:"pointer",fontWeight:"bold",height:"30px", width:"100px", marginTop:"20px", marginLeft:"200px", color:"white",borderStyle:"none",background:"blue", textDecoration:"none", padding:"5px"}}   to="/Login" > Get started</Link>

         <h2 className="intro" style={{color:"white"}}> designed by Karabo Molepo<br/></h2>
       
         </div>
            </>}
          
            
            </form>
            
            </div>

            {editTodoValue&&<Modal editTodoValue={editTodoValue}
              editModal={editModal} updateTodoHandler={updateTodoHandler}
            />} 
              
        </div>
    )
}