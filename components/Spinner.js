import React from 'react'

export default function Spinner() {
   return (
      <div className="max-h-screen w-full bg-white fixed inset-0 flex items-center justify-center z-50">
         <div className="w-8 h-8 border-b-2 border-gray-900 rounded-full animate-spin" />
      </div>
   )
}
