import React from 'react'

const FormFeild = ({labelName,type,name,placeholder,value,handleChange,isSurpiseMe,handleSurpiseMe}) => {
  return (
    <div>
      <div className='flex items-center mb-2 gap-2 '>
          <label htmlFor={name} className="block text-sm font-medium text-gray-900 dark:text-white">
            {labelName}
          </label>
          {isSurpiseMe && (
            <button
            type='button'
            onClick={handleSurpiseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black dark:bg-[#30E3DF]"
            >Surprise Me</button>
          )}

      </div>
      <input 
      
      type={type} 
      id={name}
      name={name} 
      placeholder={placeholder} 
      value={value}
      onChange={handleChange}
      required
      className='dark:bg-transparent bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
      />
    </div>
  )
}

export default FormFeild