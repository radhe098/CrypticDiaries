  import React from 'react';

  const diarydata = [
    { DATE: 22, BLOG: 322, Special: 2222 },
    { DATE: 23, BLOG: 323, Special: 2223 },
    // Add more data objects here if needed
  ];

  const Blogs = () => {
    return (
      <>
        <div className='h-[700px] w-auto flex-col m-4 bg-yellow-200 pt-2 px-3 rounded-md'>
          <div className='h-[3rem] flex-row justify-between bg-slate-700 rounded-md  '>
            <div className='flex justify-around item'>
              <div className='bg-blue-300 rounded-lg w-16  mt-2 mb-3 p-1 text-center'>DATE</div>
              <div className='bg-blue-300 rounded-lg w-16  mt-2 mb-3 p-1 text-center' style={{ width: '10rem' }}>BLOG</div>
              <div className='bg-blue-300 rounded-lg w-16  mt-2 mb-3 p-1 text-center'>Special</div>         
            </div>
            <div className='bg-slate-600 h-screen w-auto mt-[-2 px]'>
              {diarydata.map((date, index) => (
                <div key={index} className='flex justify-around'>
                  <div className='bg-blue-300 m-2 p-3 h-10 rounded-lg w-16'>{date.DATE}</div>
                  <div className='bg-blue-300 m-2 p-3 rounded-lg ' style={{ height: '', width: '10rem' }}>{date.BLOG}</div>
                  <div className='bg-blue-300 m-2 p-3 h-10 rounded-lg w-16'>{date.Special}</div>
                </div>
              ))}  
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Blogs;
