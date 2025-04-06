import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.tsx'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills.tsx'
import CV from './components/CV.tsx'




const router = createBrowserRouter(
      ([{
        path: "/",
        element : <Layout/>,
        children : [
          {
            path : "",
            element : <About/>
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
            path : "cv",
            element : <CV/>
          }
        ] 
      }])
)

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
  <RouterProvider router={ router}/>
  </React.StrictMode>
)
