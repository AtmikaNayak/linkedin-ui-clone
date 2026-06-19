import React from 'react'
import './App.css';

import JobCards from './JobCards'
import hiring from './assets/hiring.png' // Swap with your actual imports
import chip from './assets/chip.jpeg'

function Jright() {
    const jobs = [
    {
        logo: hiring, 
        title: "Summer Intern",
        company: "The Hiring Company • Bangalore Urban (On-site)",
        time: "6 days ago"
    },
    {
        logo: chip, 
        title: "Intern - Student Success & Operations",
        company: "Polaris School of Technology • Bengaluru (On-site)",
        time: "3 weeks ago • in Apply"
    },
    {
        logo: hiring, 
        title: "Frontend Developer (React.js)",
        company: "TechNova Solutions • Remote",
        time: "1 day ago • Actively recruiting"
    },
    {
        logo: chip, 
        title: "Data Analyst Intern",
        company: "DataVail • Greater Bengaluru Area (Hybrid)",
        time: "2 days ago • 14 applicants"
    },
    {
        logo: hiring, 
        title: "Software Development Engineer I",
        company: "Amazon • Bengaluru, Karnataka, India",
        time: "1 week ago • Over 200 applicants"
    },
    {
        logo: chip, 
        title: "Product Management Intern",
        company: "InnovateTech • Pune, Maharashtra (On-site)",
        time: "5 hours ago • Actively recruiting"
    },
    {
        logo: hiring, 
        title: "Cyber Security Analyst",
        company: "SecureNet • Hyderabad, Telangana (Hybrid)",
        time: "3 days ago • in Apply"
    }
];
    return (
        <div className='jright-wrapper'>
            <div className='jright-card'>
                
                <div className='jright-header'>
                    <h3>Top job picks for you</h3>
                    <p>Based on your profile, preferences, and activity like applies, searches, and saves</p>
                </div>
                
                {jobs.map((item, index) => (
                    <JobCards key={index}
                        logo={item.logo}
                        title={item.title}
                        company={item.company}
                        time={item.time} 
                    />
                ))}
                
            </div>
        </div>
    )
}

export default Jright