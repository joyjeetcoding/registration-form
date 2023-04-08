import React from 'react'

const Form = () => {
  return (
    <div className='min-h-screen font-heading bg-green-200 flex items-center justify-center'>
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-5xl flex-col md:flex-row'>
            <form className='form-1 bg-blue-600 p-16 rounded-lg w-full md:w-1/2'>
            <h1 className='font-heading text-white text-2xl mb-[8%]'>General <br /> Information</h1>
                <select name="title" className='border-b outline-none py-2 border-gray-300 bg-transparent text-white  mb-[8%]'>
                    <option value="title" className='bg-blue-600 mx-2'>Title</option>
                    <option value="businessMan" className='bg-blue-600 m-2'>Businessman</option>
                    <option value="Reporter" className='bg-blue-600 mx-2'>Reporter</option>
                    <option value="Secretary" className='bg-blue-600 mx-2'>Secretary</option>
                </select>
                <div className='flex flex-row  text-white mb-[8%]'>
                    <input type="text" placeholder='First Name' className='placeholder-white bg-transparent py-2 outline-none border-b border-gray-300 mr-8' />
                    <input type="text" placeholder='Last Name' className='placeholder-white bg-transparent outline-none border-b border-gray-300' />
                </div>
                <div className='flex flex-col my-4'>
                    
                <select name="Position" className=' bg-transparent text-white border-b py-2 border-gray-300 outline-none mb-[8%]'>
                    <option value="pos" className='bg-blue-600'>Position</option>
                    <option value="direct" className='bg-blue-600'>Director</option>
                    <option value="manage" className='bg-blue-600'>Manager</option>
                    <option value="emp" className='bg-blue-600'>Employee</option>
                </select>
                <input type="text" placeholder='Company' className='outline-none py-2 bg-transparent text-white placeholder-white border-b border-gray-300 mb-[8%]' />
                </div>
                <input type="text" placeholder='Business Arena' className='outline-none bg-transparent text-white placeholder-white border-b border-gray-300 mr-8 py-2' />
                <select name="Employee" className='border-b outline-none border-gray-300 bg-transparent text-white py-2'>
                    <option value="emp" className='bg-blue-600'>Employees</option>
                    <option value="train" className='bg-blue-600'>Trainee</option>
                    <option value="coll" className='bg-blue-600'>Colleague</option>
                    <option value="asso" className='bg-blue-600'>Associate</option>
                </select>
            </form>
            <form className="form-2 p-16 rounded-lg bg-black w-full md:w-1/2">
            
            <h1 className='font-heading text-white text-2xl mb-[8%]'>General <br /> Information</h1>
                <select name="title" className='border-b outline-none py-2 border-gray-300 bg-transparent text-white  mb-[8%]'>
                    <option value="title" className='bg-blue-600 mx-2'>Title</option>
                    <option value="businessMan" className='bg-blue-600 m-2'>Businessman</option>
                    <option value="Reporter" className='bg-blue-600 mx-2'>Reporter</option>
                    <option value="Secretary" className='bg-blue-600 mx-2'>Secretary</option>
                </select>
                <div className='flex flex-row  text-white mb-[8%]'>
                    <input type="text" placeholder='First Name' className='placeholder-white bg-transparent py-2 outline-none border-b border-gray-300 mr-8' />
                    <input type="text" placeholder='Last Name' className='placeholder-white bg-transparent outline-none border-b border-gray-300' />
                </div>
                <div className='flex flex-col my-4'>
                    
                <select name="Position" className=' bg-transparent text-white border-b py-2 border-gray-300 outline-none mb-[8%]'>
                    <option value="pos" className='bg-blue-600'>Position</option>
                    <option value="direct" className='bg-blue-600'>Director</option>
                    <option value="manage" className='bg-blue-600'>Manager</option>
                    <option value="emp" className='bg-blue-600'>Employee</option>
                </select>
                <input type="text" placeholder='Company' className='outline-none py-2 bg-transparent text-white placeholder-white border-b border-gray-300 mb-[8%]' />
                </div>
                <input type="text" placeholder='Business Arena' className='outline-none bg-transparent text-white placeholder-white border-b border-gray-300 mr-8 py-2' />
                <select name="Employee" className='border-b outline-none border-gray-300 bg-transparent text-white py-2'>
                    <option value="emp" className='bg-blue-600'>Employees</option>
                    <option value="train" className='bg-blue-600'>Trainee</option>
                    <option value="coll" className='bg-blue-600'>Colleague</option>
                    <option value="asso" className='bg-blue-600'>Associate</option>
                </select>
            </form>
        </div>
    </div>
  )
}

export default Form