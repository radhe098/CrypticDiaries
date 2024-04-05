import React from 'react'

const diarydata = ["DATE1", "BLOG", "Special"];
const Blogs = () => {
  return (
    <>
      <div className='h-[700px] w-auto flex-col m-4 bg-yellow-200 pt-2 px-3 rounded-md'>
        <div className='h-[3rem] flex-row justify-between bg-slate-700 rounded-md'>
          <div className=' flex  justify-around'>
          <div className='bg-blue-300 rounded-lg w-16  mt-3 p-1 text-center'>DATE</div>
          <div className='bg-blue-300 rounded-lg w-16  mt-3 p-1 text-center'>BLOG</div>
          <div className='bg-blue-300 rounded-lg w-16  mt-3 p-1 text-center'>Special</div>         
           </div>
           <div className='bg-slate-600 h-auto w-auto '>
           {diarydata.map((date, index) => (
            <div key={index} className='bg-blue-300 rounded-lg w-16'>
            {date}
            </div>
          ))}
           </div>
        </div>
      </div>
      
    </>
  )
}

export default Blogs
