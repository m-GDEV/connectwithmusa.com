// using class cus idk how to sleep in functional component
import React from 'react';

class Thanks extends React.Component {
 componentDidMount(){
     setTimeout(() => {
     window.location.href = "/";
     }, 5000)
  }

  render() {
    return (
        <section className="text-h-brightgreen font-dm-sans italic bg-gradient-to-t from-g-dark to-g-light min-h-screen">
          <div className="container px-5 py-24 sm:py-48 mx-auto text-center lg:px-40 ">
            <h1 className="text-5xl text-white">Thank you for sending me a message!<br /><br /> I'll try to respond as soon as possible.</h1>             
            <p className="text-red-500 text-3xl mt-10">You will be redirected in 5 seconds.</p>
        </div>
        </section>
    )
  }
}

export default Thanks;
