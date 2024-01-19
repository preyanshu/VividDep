import React,{useEffect, useRef} from 'react'
import { Link, useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import "./h5.css";
import { useContext } from 'react';
// import Flagcontext from '../context/notes/Flagcontext';


const Sidebar_2 = (props) => {
   const {flag}=props;
    let location = useLocation();
    const navigate=useNavigate()
    const ref=useRef()
    const pathname = location.pathname;
    console.log("pathname2",pathname);
const pattern = /^\/user1\/.*/;
const pattern2 = /^\/user2\/.*/;
const pattern3 = /^\/user3\/.*/;
const convertToUrlParam = (label) => label.toLowerCase().replace(/\s+/g, '');
  return (
    <div>
         {(pattern.test(pathname)||pathname==="/user1")&&  <>
         <div style={{color:"white",display:"flex",alignItems:"center",justifyContent:"left",marginTop:15+"px",cursor:"pointer"}} >
 

 {!flag && <h5 class="" id="nothover" style={{width:"fit-content"}}></h5>

 } 
 {flag &&<>
  <lottie-player src="https://lottie.host/e1099103-9082-458f-9820-90f8929e924c/Ujk9LgevjJ.json" background="" speed="1" style={{height:50+"px",width:50+"px",marginLeft:22+"px",display:"inline-block"}} loop autoplay direction="1" mode="normal"></lottie-player>
 <h5 class="offcanvas-title ml-3 " id="nothover" style={{width:"fit-content"}}>User Name</h5> </>
 

 } 
 

 
</div>
    
    {flag && <>
    <hr />
      <h5  class="dashboard" style={{marginTop:0+"vh"}} onClick={()=>{navigate("/user1")}}><i class="fa-solid fa-table-columns fa-lg  me-3 "style={{marginLeft:10+"%",marginTop:25+"px",marginBottom:25+"px"}}></i><Link to="/user1"  style={{color:"white",textDecoration:"none"}}>Dashboard</Link></h5>
 
 
      <h5 className="notification" style={{ marginTop: 0 + "vh" }} onClick={() => navigate("/user1/notification")}>
        <i className="fa-solid fa-envelope fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/notification" className="my-3" style={{ color: "white", textDecoration: "none" }}>Notifications</Link>
      </h5>

      <h5 className='announcement' onClick={() => navigate("/user1/announcement")}>
        <i className="fa-solid fa-bullhorn fa-lg ml-5 me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/announcement" className="my-3" style={{ color: "white", textDecoration: "none" }}>Announcements</Link>
      </h5>

      <h5 className="chats" style={{ marginTop: 0 + "vh" }} onClick={() => navigate("/user1/chats")}>
        <i className="fa-solid fa-comment fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/chats" className="my-3" style={{ color: "white", textDecoration: "none" }}>Chats</Link>
      </h5>

      <h5 className='campaigns' onClick={() => navigate("/user1/campaigns")}>
        <i className="fa-solid fa-map fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/campaigns" className="my-3" style={{ color: "white", textDecoration: "none" }}>Campaigns</Link>
      </h5>

      <h5 className='calender' onClick={() => navigate("/user1/calender")}>
        <i className="fa-solid fa-calendar-days fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/calender" className="my-3" style={{ color: "white", textDecoration: "none" }}>Calender</Link>
      </h5>

      <h5 className='networks' onClick={() => navigate("/user1/networks")}>
        <i className="fa-solid fa-network-wired fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/networks" className="my-3" style={{ color: "white", textDecoration: "none" }}>Network</Link>
      </h5>

      <h5 className='activities' onClick={() => navigate("/user1/activities")}>
        <i className="fa-solid fa-chart-line fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/activities" className="my-3" style={{ color: "white", textDecoration: "none" }}>Activities</Link>
      </h5>

      <h5 className='tasks' onClick={() => navigate("/user1/tasks")}>
        <i className="fa-solid fa-list-check fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/tasks" className="my-3" style={{ color: "white", textDecoration: "none" }}>Tasks</Link>
      </h5>

      <h5 className='results' onClick={() => navigate("/user1/results")}>
        <i className="fa-solid fa-square-poll-vertical fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/results" className="my-3" style={{ color: "white", textDecoration: "none" }}>Results</Link>
      </h5>

      <h5 className='reports' onClick={() => navigate("/user1/reports")}>
        <i className="fa-solid fa-file-lines fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/reports" className="my-3" style={{ color: "white", textDecoration: "none" }}>Reports</Link>
      </h5>

      <h5 className='library' onClick={() => navigate("/user1/library")}>
        <i className="fa-solid fa-book-open fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/library" className="my-3" style={{ color: "white", textDecoration: "none" }}>Library</Link>
      </h5>

      <h5 className='airesume' onClick={() => navigate("/user1/airesume")}>
        <i className="fa-solid fa-file fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/airesume" className="my-3" style={{ color: "white", textDecoration: "none" }}>AI resume</Link>
      </h5>

      <h5 className='codeian' onClick={() => navigate("/user1/codeiann")}>
        <i className="fa-solid fa-code fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/codeiann" className="my-3" style={{ color: "white", textDecoration: "none" }}>Codeian</Link>
      </h5>

      <h5 className='feedback' onClick={() => navigate("/user1/feedback")}>
        <i className="fa-solid fa-message fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/feedback" className="my-3" style={{ color: "white", textDecoration: "none" }}>Feedback</Link>
      </h5>

      <h5 className='support' onClick={() => navigate("/user1/support")}>
        <i className="fa-solid fa-circle-question fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/support" className="my-3" style={{ color: "white", textDecoration: "none" }}>Support</Link>
      </h5>
    </>}
    {!flag && <>
      <br />
    <br />
    <div style={{border:"0px solid white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    
    <h5 className="dashboard" style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1")}>
        <i className="fa-solid fa-table-columns fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className="notification" style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/notification")}>
        <i className="fa-solid fa-envelope fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/notification" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className='announcement' style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/announcement")}>
        <i className="fa-solid fa-bullhorn fa-lg ml-5 me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/announcement" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className="chats" style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/chats")}>
        <i className="fa-solid fa-comment fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/chats" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className='campaigns' style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/campaigns")}>
        <i className="fa-solid fa-map fa-lg  me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/campaigns" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className='calender' style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/calender")}>
        <i className="fa-solid fa-calendar-days fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/calender" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className='networks' style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/networks")}>
        <i className="fa-solid fa-network-wired fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/networks" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className='activities' style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/activities")}>
        <i className="fa-solid fa-chart-line fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/activities" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className='tasks' style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/tasks")}>
        <i className="fa-solid fa-list-check fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/tasks" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className='results' style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/results")}>
        <i className="fa-solid fa-square-poll-vertical fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/results" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className='reports' style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/reports")}>
        <i className="fa-solid fa-file-lines fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/reports" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className='library' style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/library")}>
        <i className="fa-solid fa-book-open fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/library" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className='airesume' style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/airesume")}>
        <i className="fa-solid fa-file fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/airesume" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className='codeian' style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/codeian")}>
        <i className="fa-solid fa-code fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/codeian" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className='feedback' style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/feedback")}>
        <i className="fa-solid fa-message fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/feedback" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>

      <h5 className='support' style={{ marginTop: 0 + "vh", width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate("/user1/support")}>
        <i className="fa-solid fa-circle-question fa-lg me-3" style={{ marginLeft: 10 + "%", marginTop: 25 + "px", marginBottom: 25 + "px" }}></i>
        <Link to="/user1/support" className="my-3" style={{ color: "white", textDecoration: "none" }}></Link>
      </h5>
    </div></>}
     
 



    </>}


         {(pattern2.test(pathname)||pathname==="/user2")&&  <>
      <div style={{color:"white",display:"flex",alignItems:"center",justifyContent:"left",marginTop:15+"px",cursor:"pointer"}} >
 

    {!flag && <h5 class="" id="nothover" style={{width:"fit-content"}}></h5>

    } 
    {flag &&<>
     <lottie-player src="https://lottie.host/e1099103-9082-458f-9820-90f8929e924c/Ujk9LgevjJ.json" background="" speed="1" style={{height:50+"px",width:50+"px",marginLeft:22+"px",display:"inline-block"}} loop autoplay direction="1" mode="normal"></lottie-player>
    <h5 class="offcanvas-title ml-3 " id="nothover" style={{width:"fit-content"}}>User Name</h5> </>

    } 
    
   
    
  </div>
    
    {flag && <><hr />
    
    <h5 className="dashboard" style={{ marginTop: 0 }} onClick={() => navigate('/user2')}>
        <i className="fa-solid fa-table-columns fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
      </h5>
      
      <h5 className='notification' onClick={() => navigate('/user2/notification')}>
        <i className="fa-solid fa-envelope fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/notification" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Notifications</Link>
      </h5>
      
      <h5 className='chats' onClick={() => navigate('/user2')}>
        <i className="fa-solid fa-comment fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/chats" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Chats</Link>
      </h5>
      
      <h5 className='campaigns' onClick={() => navigate('/user2')}>
        <i className="fa-solid fa-map fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/campaigns" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Campaigns</Link>
      </h5>
      
      <h5 className='calender' onClick={() => navigate('/user2')}>
        <i className="fa-solid fa-calendar-days fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/calender" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Calender</Link>
      </h5>
      
      <h5 className='networks' onClick={() => navigate('/user2')}>
        <i className="fa-solid fa-network-wired fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/networks" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Network</Link>
      </h5>
      
      <h5 className='activities' onClick={() => navigate('/user2')}>
        <i className="fa-solid fa-chart-line fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/activities" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Activities</Link>
      </h5>
      
      <h5 className='tasks' onClick={() => navigate('/user2')}>
        <i className="fa-solid fa-list-check fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/tasks" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Tasks</Link>
      </h5>
      
      <h5 className='studentattendence' onClick={() => navigate('/user2/studentattendence')}>
        <i className="fa-solid fa-chart-pie fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/studentattendence" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Student Attendence</Link>
      </h5>
      
      <h5 className='studentprogress' onClick={() => navigate('/user2/studentprogress')}>
        <i className="fa-solid fa-bars-progress fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/studentprogress" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Student Progress</Link>
      </h5>
      
      <h5 className='library' onClick={() => navigate('/user2')}>
        <i className="fa-solid fa-book-open fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/library" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Library</Link>
      </h5>
      
      <h5 className='support' onClick={() => navigate('/user2')}>
        <i className="fa-solid fa-circle-question fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/support" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Support</Link>
      </h5>
      
      <h5 className='feedback' onClick={() => navigate('/user2')}>
        <i className="fa-solid fa-message fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/feedback" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Feedback</Link>
      </h5>
     </> }

     
    {!flag && <>
    <br />
    <br />
    <div style={{border:"0px solid white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      
    <h5 className="dashboard" style={{ marginTop: 0, width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate('/user2')}>
        <i className="fa-solid fa-table-columns fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/dashboard" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      
      <h5 className='notification' style={{ width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate('/user2/notification')}>
        <i className="fa-solid fa-envelope fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/notification" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      
      <h5 className='chats' style={{ width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate('/user2/chats')}>
        <i className="fa-solid fa-comment fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/chats" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      
      <h5 className='campaigns' style={{ width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate('/user2/campaigns')}>
        <i className="fa-solid fa-map fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/campaigns" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      
      <h5 className='calender' style={{ width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate('/user2/calender')}>
        <i className="fa-solid fa-calendar-days fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/calender" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      
      <h5 className='networks' style={{ width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate('/user2/networks')}>
        <i className="fa-solid fa-network-wired fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/networks" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      
      <h5 className='activities' style={{ width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate('/user2/activities')}>
        <i className="fa-solid fa-chart-line fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/activities" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      
      <h5 className='tasks' style={{ width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate('/user2/tasks')}>
        <i className="fa-solid fa-list-check fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/tasks" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      
      <h5 className='studentattendence' style={{ width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate('/user2/studentattendence')}>
        <i className="fa-solid fa-chart-pie fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/studentattendence" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      
      <h5 className='studentprogress' style={{ width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate('/user2/studentprogress')}>
        <i className="fa-solid fa-bars-progress fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/studentprogress" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      
      <h5 className='library' style={{ width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate('/user2/library')}>
        <i className="fa-solid fa-book-open fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/library" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      
      <h5 className='support' style={{ width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate('/user2/support')}>
        <i className="fa-solid fa-circle-question fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/support" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      
      <h5 className='feedback' style={{ width: "fit-content", paddingLeft: "8px", marginLeft: "8px" }} onClick={() => navigate('/user2/feedback')}>
        <i className="fa-solid fa-message fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user2/feedback" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
     </div></> }

 


    </>}
         {(pattern3.test(pathname)||pathname==="/user3")&&  <>
         <div style={{color:"white",display:"flex",alignItems:"center",justifyContent:"left",marginTop:15+"px",cursor:"pointer"}} >
 

 {!flag && <h5 class="" id="nothover" style={{width:"fit-content"}}></h5>

 } 
 {flag &&<>
  <lottie-player src="https://lottie.host/e1099103-9082-458f-9820-90f8929e924c/Ujk9LgevjJ.json" background="" speed="1" style={{height:50+"px",width:50+"px",marginLeft:22+"px",display:"inline-block"}} loop autoplay direction="1" mode="normal"></lottie-player>
 <h5 class="offcanvas-title ml-3 " id="nothover" style={{width:"fit-content"}}>User Name</h5> </>

 } 
 

 
</div>
{flag && <>
  <hr />
 
  <h5 className="dashboard" style={{ marginTop: 0 }} onClick={() => navigate('/user3')}>
        <i className="fa-solid fa-table-columns fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
      </h5>
      
      <h5 className='notification' onClick={() => navigate('/user3/notification')}>
        <i className="fa-solid fa-envelope fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/notification" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Notifications</Link>
      </h5>
      
      <h5 className='chats' onClick={() => navigate('/user3/chats')}>
        <i className="fa-solid fa-comment fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/chats" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Chats</Link>
      </h5>
      
      <h5 className='campaigns' onClick={() => navigate('/user3/campaigns')}>
        <i className="fa-solid fa-map fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/campaigns" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Campaigns</Link>
      </h5>
      
      <h5 className='calender' onClick={() => navigate('/user3/calender')}>
        <i className="fa-solid fa-calendar-days fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/calender" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Calendar</Link>
      </h5>
      
      <h5 className='networks' onClick={() => navigate('/user3/networks')}>
        <i className="fa-solid fa-network-wired fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/networks" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Network</Link>
      </h5>
      
      <h5 className='activities' onClick={() => navigate('/user3/activities')}>
        <i className="fa-solid fa-chart-line fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/activities" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Activities</Link>
      </h5>
      
      <h5 className='tasks' onClick={() => navigate('/user3/tasks')}>
        <i className="fa-solid fa-list-check fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/tasks" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Tasks</Link>
      </h5>
      
      <h5 className='results' onClick={() => navigate('/user3/results')}>
        <i className="fa-solid fa-square-poll-vertical fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/results" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Results</Link>
      </h5>
      
      <h5 className='reports' onClick={() => navigate('/user3/reports')}>
        <i className="fa-solid fa-file-lines fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/reports" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Reports</Link>
      </h5>
      
      <h5 className='library' onClick={() => navigate('/user3/library')}>
        <i className="fa-solid fa-book-open fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/library" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Library</Link>
      </h5>
      
      <h5 className='airesume' onClick={() => navigate('/user3/airesume')}>
        <i className="fa-solid fa-file fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/airesume" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>AI Resume</Link>
      </h5>
      
      <h5 className='codeian' onClick={() => navigate('/user3/codeian')}>
        <i className="fa-solid fa-code fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/codeian" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Codeian</Link>
      </h5>
      
      <h5 className='feedback' onClick={() => navigate('/user3/feedback')}>
        <i className="fa-solid fa-message fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/feedback" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Feedback</Link>
      </h5>
      
      <h5 className='support' onClick={() => navigate('/user3/support')}>
        <i className="fa-solid fa-circle-question fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/support" className="my-3" style={{ color: 'white', textDecoration: 'none' }}>Support</Link>
      </h5>
   

</>}
{!flag && <>
 
 <br />
 <br />

 
 <div style={{ border: '0px solid white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h5 className="dashboard" style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/dashboard')}>
        <i className="fa-solid fa-table-columns fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/dashboard" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='notification' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/notification')}>
        <i className="fa-solid fa-envelope fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/notification" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='chats' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/chats')}>
        <i className="fa-solid fa-comment fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/chats" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='campaigns' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/campaigns')}>
        <i className="fa-solid fa-map fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/campaigns" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='calender' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/calender')}>
        <i className="fa-solid fa-calendar-days fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/calender" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='networks' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/networks')}>
        <i className="fa-solid fa-network-wired fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/networks" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='activities' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/activities')}>
        <i className="fa-solid fa-chart-line fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/activities" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='tasks' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/tasks')}>
        <i className="fa-solid fa-list-check fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/tasks" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='results' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/results')}>
        <i className="fa-solid fa-square-poll-vertical fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/results" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='reports' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/reports')}>
        <i className="fa-solid fa-file-lines fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/reports" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='library' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/library')}>
        <i className="fa-solid fa-book-open fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/library" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='airesume' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/airesume')}>
        <i className="fa-solid fa-file fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/airesume" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='codeian' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/codeian')}>
        <i className="fa-solid fa-code fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/codeian" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='feedback' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/feedback')}>
        <i className="fa-solid fa-message fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/feedback" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
      <h5 className='support' style={{ width: 'fit-content', paddingLeft: '8px', marginLeft: '8px' }} onClick={() => navigate('/user3/support')}>
        <i className="fa-solid fa-circle-question fa-lg me-3" style={{ marginLeft: '10%', marginTop: '25px', marginBottom: '25px' }}></i>
        <Link to="/user3/support" className="my-3" style={{ color: 'white', textDecoration: 'none' }}></Link>
      </h5>
    </div></>}
    
    
 

 


    </>}

    
      
    </div>
  )
}

export default Sidebar_2

