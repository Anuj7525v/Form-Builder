import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './flow.module.css';
import { FiMessageSquare, FiAtSign } from "react-icons/fi";
import { CiImageOn, } from "react-icons/ci";
import { FaPhotoVideo, FaRegStar } from "react-icons/fa";
import { MdGif, MdNumbers, MdDateRange } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { BsFonts } from "react-icons/bs";
import { TbCheckbox } from "react-icons/tb";









// Input and Bubble Components
const TextInput = () => <input type="text" placeholder="Enter text" />;
const NumberInput = () => <input type="number" placeholder="Enter number" />;
const EmailInput = () => <input type="email" placeholder="Enter email" />;
const PhoneInput = () => <input type="tel" placeholder="Enter phone number" />;
const DateInput = () => <input type="date" />;
const RatingInput = () => <input type="number" min="1" max="5" placeholder="Rate (1-5)" />;
const Buttons = () => <button>Button</button>;

const ImageBubble = () => <img src="image.png" alt="Image Bubble" />;
const VideoBubble = () => <video controls src="video.mp4" />;
const GifBubble = () => <img src="gif.gif" alt="GIF Bubble" />;

const components = {
  TextInput,
  NumberInput,
  EmailInput,
  PhoneInput,
  DateInput,
  RatingInput,
  Buttons,
  ImageBubble,
  VideoBubble,
  GifBubble,
};

const Flow = () => {
  const [items, setItems] = useState([]);

  const handleClick = (type) => {
    setItems([...items, type]);
  };




  return (
    <div className={styles.page}>
      <div className={styles.leftbox}>
        <div className={styles.box1}>
          <p>Bubbles</p>
          <div className={styles.btnbubble}>
            <button onClick={() => handleClick('TextInput')}> <span><FiMessageSquare />
            </span>          Text</button>
            <button onClick={() => handleClick('ImageBubble')}><span><CiImageOn />
            </span>Image</button>
            <button onClick={() => handleClick('VideoBubble')}> <span><FaPhotoVideo />
            </span> Video</button>
            <button onClick={() => handleClick('GifBubble')}> <span><MdGif />
            </span> GIF</button>
          </div>
        </div>
        <div className={styles.box2}>
          <p>Inputs</p>
          <div className={styles.btnInput}> <button onClick={() => handleClick('TextInput')}><span><BsFonts />
          </span>Text</button>
            <button onClick={() => handleClick('NumberInput')}> <span><MdNumbers />
            </span>Number</button>
            <button onClick={() => handleClick('EmailInput')}><span><FiAtSign />
            </span> Email</button>
            <button onClick={() => handleClick('PhoneInput')}><span><LuPhone />
            </span>Phone</button>
            <button onClick={() => handleClick('DateInput')}><span><MdDateRange />

            </span>Date</button>
            <button onClick={() => handleClick('RatingInput')}><span><FaRegStar />
            </span>Rating</button>
            <button onClick={() => handleClick('Buttons')}><span><TbCheckbox />
            </span>Buttons</button></div>


        </div>

      </div>
      <div className={styles.rightbox}>
        <div className={styles.start}>Start</div>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            {item === 'Text' && <div>Text Bubble</div>}
            {item === 'Image' && <div>Image Bubble</div>}
            {item === 'Video' && <div>Video Bubble</div>}
            {item === 'GIF' && <div>GIF Bubble</div>}
            {item === 'TextInput' && <input type="text" placeholder="Text Input" />}
            {item === 'Number' && <input type="number" placeholder="Number Input" />}
            {item === 'Email' && <input type="email" placeholder="Email Input" />}
            {item === 'Phone' && <input type="tel" placeholder="Phone Input" />}
            {item === 'Date' && <input type="date" />}
            {item === 'Rating' && <div>Rating Input</div>}
            {item === 'Buttons' && <div>Button Input</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flow;
