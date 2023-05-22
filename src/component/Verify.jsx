import React from 'react'
import man from "../assets/man.svg"

const Verify =()=> {
  return (
    <div className='flex bg-[#EAE4F4] justify-between pr-16 pl-16  md:flex-shrink-0 pt-8 pb-32'>
       <div className='border rounded-[16px] bg-[#fff] w-[427px] pl-8 pt-12'>
       <h2 className='text-[Montserrat] text-[32px] font-semibold '>Enter code sent to</h2>
       <p className='text-[#A39DA9] font-normal text-[20px]'>alexnurreo597@gmail.com</p>
       <span className='text-[#7F00FF] text-[14px] text-[Montserrat] font-semibold'>Edit Email</span>
       <form>
        <label className='text-[#BBBBBB] text-[14px] font-normal text-[Montserrat]'>Code</label>
        <div className='flex w-full'>
          <input type="text"
           className='border w-[350px] p-1 text-[#DAD7DD]'
          />
          
        </div>
        <div className='flex gap-28 pt-8'>
        <button className='text-[#BBBBBB] text-[12px] font-normal'>Didn’t get code? <span className='text-[#7F00FF] font-semibold text-[14px] text-[Montserrat]'>Resend</span></button>
        <button className='border rounded p-1 w-[100px] bg-[#7F00FF] text-[#fff] font-semibold'>Continue</button>
        </div>

       </form>
       </div>
        <img src={man} alt="" />
    </div>
  )
}

export default Verify