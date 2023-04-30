import React from 'react'

const OurPractice = () => {
    return (
        <div className="w-full py-36">
            <section className="w-full text-white font-bold bg-blue relative flex flex-col items-center min-h-[400px] p-3">
                <h1 className='mt-32'>Nice Curves</h1>
                <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                <div className="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                {/* <div className="absolute h-[225px] w-[100%] bottom-0 before:content-none before:block before:absolute before:rounded-bl-[2rem]  */}
                {/*     before:w-[55%] before:h-[100%] before:bg-primary-black after::content-none after:block after:absolute after:rounded-bl-[2rem] after:w-[55%] after:h-[100%] aftrer:bg-blue"  /> */}
            </section>
            <section className="relative bg-red flex flex-col items-center min-h-[400px] p-3">
                <h1>Nice Curves</h1>
                <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            </section>
            <section className="relative bg-blue flex flex-col items-center min-h-[400px] p-3">
                <h1>Nice Curves</h1>
                <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                <div className="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>
        </div >
    )
}

export default OurPractice 
