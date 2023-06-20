import React, { useState } from 'react';

const CourseCurriculam = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='course-curriculum'>
      <div className="border border-gray-300 rounded mb-2">
        <div
          className="flex justify-between items-center px-4 py-2 bg-gray-100 cursor-pointer"
          onClick={toggleAccordion}
        >
          <h3 className="text-lg font-medium">Section1</h3>
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.4 15.4L12 18l2.6-2.6L16 16l-6 6-6-6 1.4-1.4L10 16l-.6-.6z"
            ></path>
          </svg>
        </div>
        {isOpen && (
          <div className="p-4 bg-white">
            <p>Content</p>
          </div>
        )}
      </div>

      <div className="max-w-md mx-auto">
      </div>
    </div>
  )
}

export default CourseCurriculam