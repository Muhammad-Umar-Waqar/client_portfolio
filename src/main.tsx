import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills.tsx'
import Testimonials from './components/Testimonials.tsx'
import Home from './components/Home.tsx'




const router = createBrowserRouter(
      ([{
        path: "/",
        element : <App/>,
        children : [
          {
            path : "",
            element : <Home/>
          },
          {
            path : "contact",
            element : <Contact/>
          },
          {
            path : "about",
            element : <About/>
          },
          {
            path : "projects",
            element : <Projects/>
          },
          {
            path : "skills",
            element : <Skills/>
          },
          {
            path : "testimonials",
            element : <Testimonials/>
          }

        ] 
      }])
)

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
  <RouterProvider router={ router}/>
  </React.StrictMode>
)
