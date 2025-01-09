import React from 'react'
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

function Footer() {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className='py-8 px-4'>
            <a 
              href="#" 
              className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
              G-Kart
            </a>
            <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel reiciendis vero soluta voluptate maxime?  
            </p>
            <p className='text-gray-500 mt-4'>Site built by Ajay Kumar</p>
            <a 
              href="https://www.linkedin.com/in/ajay70aa"
              target="_blank"
              className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'
              >
              Visit my Linkedin Profile
            </a>
          </div>
          {/* Footer links */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map((data, index) => {
                    return (
                      <li key={index}>
                      <a 
                        href={data.link}
                        className='text-gray-600 dark:text-gray-400
                        hover:dark:text-white hover:text-black duration-300'
                      >
                        {data.title}
                      </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            {/* second col links */}            
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>
                Quick Links
              </h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map((data, index) => {
                    return (
                      <li key={index}>
                      <a 
                        href={data.link}
                        className='text-gray-600 dark:text-gray-400
                        hover:dark:text-white hover:text-black duration-300'
                      >
                        {data.title}
                      </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            {/* My address */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
            <h1 className='text-xl font-bold sm:text-left mb-3'>Address
            </h1>
              <div>
                <div className='flex items-center gap-3'>
                  <FaLocationArrow />
                  <p>Hyderabad, Telangana</p>
                </div>
                <div className='flex items-center gap-3 mt-6'>
                  <FaMobileAlt />
                  <p>+91 7729931256</p>
                </div>
                {/* social links */}
                <div className='flex items-center gap-3 mt-6'>
                  <a href="https://www.instagram.com/ajay_dasaroju/" target="_blank">
                    <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                  </a>
                  <a href="https://www.facebook.com/ajay.ajaykumar.1217/" target="_blank">
                    <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                  </a>
                  <a href="https://github.com/ajay70aa" target="_blank">
                    <FaGithub className='text-3xl hover:text-primary duration-300'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer