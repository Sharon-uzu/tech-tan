import ReactPlayer from 'react-player';
import React, {useEffect, useRef } from "react";
import {useLocation } from 'react-router-dom';
import Header from '../Components/Header'
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineNoteAlt } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import { FaFileDownload } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { FaUserGroup } from "react-icons/fa6";
import img from '../../Images/PRODUCT MANAGEMENT_035553.jpg'
import { FaStar } from "react-icons/fa";
import Footer from '../Components/Footer'
import { IoCheckmarkSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdTask } from "react-icons/md";


const VIDEO_PATH = 'https://www.youtube.com/watch?v=0BnuvEoyaZ0';



const ProductMgt = () => {

  const playerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto'; // Enable scrolling

  }, [pathname]);


  return (
    <div className='course'>
      <Header/>

      <div className='users'>
        <h1>Product Management Course</h1>
        <span className='user'>
          <FaUserGroup style={{marginRight:'5px'}}/>
          Maximum of 10 persons in a class.

        </span>
      </div>

      

      <section className='course1'>
      

        <div className='course-left'>
          <h1>This Course Includes</h1>
          <div>
            <TbUsersGroup className='c-i'/>
            <span>Physical and Intensive training</span>
          </div>

          <div>
            <FaFileDownload className='c-i'/>
            <span>Installation of software/tools</span>
          </div>

          <div>
            <MdOutlineNoteAlt className='c-i'/>
            <span>Hands-On Practicals</span>
          </div>

          <div>
            <AiOutlineProject className='c-i'/>
            <span>Real-life Projects</span>
          </div>

          <div>
            <MdTask className='c-i'/>
            <span>Tasks/Assigments</span>
          </div>

          <div>
            <GrCertificate className='c-i'/>
            <span>Certificate</span>
          </div>

          


        </div>


        <div className='course-r'>

          <img src={img} alt="" />

          <div>
            <span className='price'>
              <span>NGN175,000.00</span>
              <span className='price-slash'>NGN225,000.00</span>
            </span>
            <Link to='/enroll'><button>Enroll Now</button></Link>

          </div>
          

        </div>



      </section>


    <section className='course2'>
      <div className='course2-l'>

        <div className='course2-top'>

          <h1>About the Course</h1>
          <p>Master the essentials of product management with our dynamic course. Gain hands-on experience and earn a globally recognized certificate to excel in product management roles.</p>

        </div>

        <div className='course2-b'>

          <h4>Course Content</h4>
       

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>The meaning of Graphics Design</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>The meaning of Graphics Design</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>The meaning of Graphics Design</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>The meaning of Graphics Design</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>The meaning of Graphics Design</span>
            <span className='star'>*</span>

          </div>

          <div className='curr'>
            <IoCheckmarkSharp className='cos-i'/>
            <span>The meaning of Graphics Design</span>
            <span className='star'>*</span>

          </div>
          <div className="btn">
            <button>Download full curriculum</button>
          </div>
          
        </div>

      </div>

      <div className='course2-r'>


          <ReactPlayer ref={playerRef} width='100%' height='300px' url={VIDEO_PATH} controls={true} playing={true} muted  className='video' style={{width:'50px'}}/>

          <div>
            <span className='price'>
              <span>NGN175,000.00</span>
              <span className='price-slash'>NGN225,000.00</span>
            </span>
            <button><Link to='/enroll'>Enroll Now</Link></button>
          </div>
          

        </div>


    </section>


    <div className="learn">
      <h3>Product Management Tools to learn</h3>

      <div>
        <h5>Jira</h5>
      </div>

      <div>
        <h5>Slack</h5>
      </div>

      <div>
        <h5>Whimsical</h5>
      </div>

      <div>
        <h5>Sketch Asana</h5>
      </div>

      <div>
        <h5>Roadmunk</h5>
      </div>

      <div>
        <h5>Trello</h5>
      </div>

      <div>
        <h5>GitHub</h5>
      </div>

      <div>
        <h5>Prodpad</h5>
      </div>

      <div>
        <h5>Google Analytics</h5>
      </div>

      <div>
        <h5>Monday.com</h5>
      </div>

      <div>
        <h5>Confluence</h5>
      </div>
      
    </div>


    <section className='illustrate'>

      <h2>All Product Design courses</h2>

      <div>
        <img src={img} alt="" />
        <h3>The Art and Skill in Drawing</h3>
        <span className='span'>

          <span>4.9</span>

          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>

          <span>(13,400)</span>

        </span>
      </div>

      <div>
        <img src={img} alt="" />
        <h3>The Complete Great Design Theory</h3>
        <span className='span'>

          <span>4.9</span>

          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>

          <span>(13,400)</span>

        </span>
      </div>

      <div>
        <img src={img} alt="" />
        <h3> Great Design Master Class for Beginner</h3>
        <span className='span'>

          <span>4.9</span>

          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>
          <FaStar className='star-i'/>

          <span>(13,400)</span>

        </span>
      </div>

    </section>

    

    <Footer/>
    </div>
  )
}

export default ProductMgt