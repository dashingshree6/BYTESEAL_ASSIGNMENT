import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col justify-center p-4 border-4 border-gray-600 dark:border-gray-200 md:w-6/12 md:ml-56 rounded-xl">
            <h1 className="bg-gray-600 dark:bg-gray-200 text-center text-white dark:text-gray-600 h-10 font-bold text-xl">ABOUT US</h1>
            <div className="flex flex-col border-2 bg-gray-300">
                <h2 className="text-slate-900 font-bold">WHO WE ARE</h2>
                <p>We are performance agency.helping business drive revenue with use of inbound marketinf and sales enanlement tactics since 2012. We are proud Platinum Partner and pride ourseleves.</p>
                <h4 className="text-slate-900 font-bold">WE'RE DIFFERENT THAN THE REST</h4>
                <p><b>We are rooted in.</b>Our parent company has been helping organizations turn talent into performance</p>
                <p><b>We have been where you are.</b>Our parent company has been helping organizations turn talent into performance</p>
            </div>
        </div>
    )
}
export default About;