import { useEffect,useState,useRef } from 'react';
import'./chat.css';
import EmojiPicker from 'emoji-picker-react';
const Chat = () => {
  const [open,setOpen] = useState(false);
  const [text,setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const handleEmoji = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
    setOpen(false);
  }
  return (
    <div className='chat'>
      <div className='top'>
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Barney Stinson</span>
            <p>active</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className='center'>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>what up ted</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="./bg.jpg" alt="" />
            <p>what now barney</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>i am gonna teach you how to live</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>stfu</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className='bottom'>
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message ...' value={text} onChange={e=>setText(e.target.value)}/>
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={()=>setOpen(current=>!current)} />
          <div className="picker">
          <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat