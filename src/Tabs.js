import React, { useState } from 'react'

const Tabs = () => {
    
    const [toggle, setTooggle] = useState(1)

    const toggleTab = (index) => {
        setTooggle(index)
    }

  return (
    <div className='container'>
      <div className='tabs_item'>
        <div className={toggle === 1 ? "tabs active_tabs" : "tabs"} onClick={() => toggleTab(1)}>ReactJS</div>
        <div className={toggle === 2 ? "tabs active_tabs" : "tabs"} onClick={() => toggleTab(2)}>NextJS</div>
        <div className={toggle === 3 ? "tabs active_tabs" : "tabs"} onClick={() => toggleTab(3)}>NodeJS</div>
      </div>
      <div className='tab_content'>
        <div className={toggle === 1 ? "content active_content" : "content"} onClick={() => toggleTab(1)}>
            <h3>ReactJS</h3>
            <hr></hr>
            <br></br>
            <p>React is a free and open-source front-end JavaScript 
                library for building user interfaces based on components.
                It is maintained by Meta and a community of individual 
                developers and companies. React can be used to develop 
                single-page, mobile, or server-rendered applications with 
                frameworks like Next.js. </p>
        </div>
        <div className={toggle === 2 ? "content active_content" : "content"} onClick={() => toggleTab(2)}>
            <h3>NextJS</h3>
            <hr></hr>
            <br></br>
            <p>Next.js is an open-source web development framework 
                created by the private company Vercel providing React-based 
                web applications with server-side rendering and static website 
                generation. Next.js is a React framework that gives you building 
                blocks to create web applications. By framework, we mean Next.js 
                handles the tooling and configuration needed for React, and provides 
                additional structure, features, and optimizations for your application.</p>
        </div>
        <div className={toggle === 3 ? "content active_content" : "content"} onClick={() => toggleTab(3)}>
            <h3>NodeJS</h3>
            <hr></hr>
            <br></br>
            <p>Node.js is a cross-platform, open-source server 
                environment that can run on Windows, Linux, Unix, macOS, 
                and more. Node.js is a back-end JavaScript runtime environment, 
                runs on the V8 JavaScript Engine, and executes JavaScript code 
                outside a web browser. </p>
        </div>
      </div>
    </div>
  )
}

export default Tabs
