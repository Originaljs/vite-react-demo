import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import { router } from './router'

export default function App() {
  return (
    <div id='App'>
      <RouterProvider router={router}/>
    </div>
  )
}
