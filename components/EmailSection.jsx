"use client";
import React, {useState} from 'react'
import GithubIcon from "/public/github.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,        
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = '/api/send';

        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint,options);
        const resData = await response.jsonI();
        
        if (response.status === 200){
            setEmailSubmitted(true);
        }
    }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-20 transform -translate-x-1/2 -translate-1/2' ></div>
        <div className='z-10'>
            <h5 className='text -xl font-bold text-white my-2'
            >
                {"Let's Connect"}
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {"Feel free to reach out if you're looking to collaborate, brainstorm, or simply have a chat. I'm always eager to connect with like-minded individuals and explore new opportunities for growth and mutual inspiration."}
                
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="github.com">
                    {/* <Image src={GithubIcon} alt="Github Icon"/> */}
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col gap-6' onSubmit={handleSubmit} action="">
                <label htmlFor="email" type="email" className='text-white block mb-1'>Your email</label>
                <input 
                    name='email'
                    type="email" 
                    id="email" 
                    required 
                    placeholder='example@hotmail.com'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                />
                <label htmlFor="subject" type="text" className='text-white block mb-1'>Subject</label>
                <input 
                    name='subject'
                    type="text" 
                    id="subject" 
                    required 
                    placeholder='Halo !'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                />
                <label htmlFor="message" className='text-white'>Message</label>
                <textarea 
                    name='message'
                    type="message" 
                    id="message" 
                    required 
                    placeholder='Lets talk!'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                />
                <button
                    type='submit'
                    className='bg-purple-500 hover:bg-purple text-white font-medium py-2.5 px-5 rounded-lg w-full' 
                >Send Message</button>
                {
                    emailSubmitted &&(
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )
                }
                
            </form>
        </div>
    </section>
  )
}

export default EmailSection