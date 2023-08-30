import React, {useState} from 'react'
import {BsFillChatDotsFill} from "react-icons/bs"
import {IoMdSend} from "react-icons/io"
// import {AiOutlineClose} from "react-icons/ai"
import avatar2 from '../assets/avtar2.png'
import avatar1 from '../assets/av1.png'
import './chat.css'
const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div> 
    
      <div className={`card ${isOpen ? 'open' : ''}`}>
      <div className="chat_icon" onClick={toggleCard} >
        <BsFillChatDotsFill />
      </div>
      {isOpen && (
       <div class="chat-box">
       <div class="chat-box-header">
         VRC Chat Box
      
       </div>
       <div class="chat-box-body">
         <div class="chat-box-overlay p-2 d-flex">  
         <img className='av12' src={avatar2} alt="" width={40} height={40} />
         <p className='mt-2 mx-2 chatAdmin'>Hello! Can I Help You?</p>
         </div>
         <div class="chat-logs">
         <img className='av11' src={avatar1} alt="" width={40} height={40} />
         <p className='mt-2 chatClient'>I want some Help</p>
         </div>
         <div class="chat-box-overlay p-2 d-flex">  
         <img className='av12' src={avatar2} alt="" width={40} height={40} />
         <p className='mt-2 mx-2 chatAdmin'>Yes What Is Your Issue sir</p>
         </div>
         <div class="chat-logs">
         <img className='av11' src={avatar1} alt="" width={40} height={40} />
         <p className='mt-2 chatClient'>I want withdraw but its not work</p>
         </div>
         
       </div>
       <div class="chat-input">      
         <form>
           <input type="text" id="chat-input" placeholder="Send a message..."/>
         <button class="chat-submit"><IoMdSend class="material-icons" /></button>
         </form>      
       </div>
     </div>
      )}
    </div>
    </div>
  )
}

export default Chat
