import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/odina2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import AboutImg from '../assets/images/about.jpg';
import AboutImg2 from '../assets/images/about2.jpg'
import {
  BrowserRouter as Router
} from "react-router-dom";


const AboutPage = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
    
  return (
    <div className='about-text'>
      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='py-4 md:underline'>Who I Am</h2>
          <p className='py-2 text-justify text-gray-600'>
            Hello! I am Tamal Sarker, a highly motivated individual from Gupinathpur, Nayarhat, Ashuliya, Dhaka-1350, Bangladesh. I am holding a Bachelor of Science degree in <b>Computer Science and Engineering</b>from <b>Sonargaon University</b>, where I graduated with a CGPA of 3.72 out of 4. I have an impressive array of skills in various programming languages, including <b>C, C++, HTML, CSS, Python, PHP, Javascript, Next.js, and React.js</b>. In addition, I have earned certifications in <b>Cisco Certified Network Associate (CCNA), Power Supply Network Analysis (PSNA), Computer-Aided Drawing and Solid Works Mechanical Design </b>. 
          </p>
          <p className='py-2 text-justify text-gray-600'>
          Currently, I am working as an Assistant Teacher (Science and ICT) at Holy Kids School and College, but I have my sights set on pursuing a career in the software industry. I am a quick learner, responsible, dependable, self-directed, and self-motivated, making me an excellent candidate for a role in the software industry. While Bengali is my primary language, i am also fluent in English. With My educational qualifications, certifications, and passion for programming, I am ready to take on new challenges and make valuable contributions to the world of software development.
          </p>
         
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          
          <a href="#"><img src={AboutImg} alt="" /></a>
        </div>

      </div>
    </div>
      </div>
        )
  }
export default AboutPage;