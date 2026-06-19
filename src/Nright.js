import React from 'react'
import './App.css';

import RequestContent from './RequestContent'
import Npuzzle from './Npuzzle'
import NetworkCard from './NetworkCard'

import profile from './assets/profile.jpeg'
import patches from './assets/patches.svg'
import zip from './assets/zip.svg'
import sudoku from './assets/sudoku.png'
import tango from './assets/tango.png'
import pinpoint from './assets/pinpoint.png'
import queens from './assets/queens.png'

import m1 from './assets/m1.jpeg';
import m2 from './assets/m2.jpeg';
import m3 from './assets/m3.jpeg';
import m4 from './assets/m4.jpeg';
import m5 from './assets/m5.jpeg';
import m6 from './assets/m6.jpeg';
import m7 from './assets/m7.jpeg';
import m8 from './assets/m8.jpeg';

import f1 from './assets/f1.jpeg';
import f2 from './assets/f2.jpeg';
import f3 from './assets/f3.jpeg';
import f4 from './assets/f4.jpeg';

import p1 from './assets/p1.jpeg';
import p2 from './assets/p2.jpeg';
import p3 from './assets/p3.jpeg';
import p4 from './assets/p4.jpeg';
import pb from './assets/pb.png';

function Nright() {
    const requests = [
    {
        profileImg: m6,
        name: "Arjun Desai",
        about: "Civil Engineering | L&T Intern",
        mutualText: "Priya Menon and 31 other mutual connections"
    },
    {
        profileImg: f2,
        name: "Kavya Ramesh",
        about: "B.Tech Computer Science | Web Developer",
        mutualText: "Vikram Singh and 12 other mutual connections"
    },
    {
        profileImg: f3,
        name: "Ritika Shenoy",
        about: "Marketing Associate | SEO Specialist",
        mutualText: "7 mutual connections"
    },
    {
        profileImg: m7,
        name: "Kunal Patil",
        about: "Data Engineer | Big Data & Hadoop",
        mutualText: "Sneha Rao and 45 other mutual connections"
    },
    {
        profileImg: f4,
        name: "Aisha Khan",
        about: "Freelance Graphic Designer | Illustrator",
        mutualText: "Ananya Desai and 19 other mutual connections"
    },
    {
        profileImg: m8,
        name: "Gaurav Joshi",
        about: "Cloud Architect | Azure & GCP",
        mutualText: "14 mutual connections"
    },
    {
        profileImg: f1,
        name: "Nandini Gupta",
        about: "Business Analyst @ TCS | Agile Enthusiast",
        mutualText: "Rahul Sharma and 8 other mutual connections"
    },
    {
        profileImg: m1,
        name: "Tarun Reddy",
        about: "Electronics and Communication '24 | VLSI Design",
        mutualText: "Karthik Shetty and 33 other mutual connections"
    }
];

    const puzzle = [
        {
            img: patches,
            name: "Patches #82",
            players: "🔥 1-day streak"
        },
        {
            img: zip,
            name: "Zip #447",
            players: "🔥 1-day streak"
        },
        {
            img: sudoku,
            name: "Mini Sudoku #300",
            players: "🔥 1-day streak"
        },
        {
            img: tango,
            name: "Tango #82",
            players: "🔥 3-day streak"
        },
        {
            img: pinpoint,
            name: "Pinpoint #12",
            players: "Play now"
        },
        {
            img: queens,
            name: "Queens #55",
            players: "🔥 5-day streak"
        }
    ];

    const people = [
    {
        coverImg: pb,
        profileImg: f2,
        name: "Shreya Bhat",
        about: "Information Technology Student | Aspiring SDE",
        mutualText: "Neha Joshi and 11 other mutual connections"
    },
    {
        coverImg: pb,
        profileImg: f3,
        name: "Divya Nambiar",
        about: "Operations Manager | Supply Chain Logistics",
        mutualText: "22 mutual connections"
    },
    {
        coverImg: pb,
        profileImg: f4,
        name: "Preethi Rajan",
        about: "Full-Stack Developer Intern @ Wipro",
        mutualText: "Aman Gupta and 16 other mutual connections"
    },
    {
        coverImg: pb,
        profileImg: m2,
        name: "Siddharth Menon",
        about: "Finance Major | Investment Banking Enthusiast",
        mutualText: "Rohan Kumar and 5 other mutual connections"
    },
    {
        coverImg: pb,
        profileImg: m3,
        name: "Rishabh Jain",
        about: "Machine Learning Engineer | NLP & GenAI",
        mutualText: "Meghana Bhat and 29 other mutual connections"
    },
    {
        coverImg: pb,
        profileImg: f1,
        name: "Lavanya Krishna",
        about: "HR Executive | Talent Acquisition Strategy",
        mutualText: "Shruti Hassan and 18 other mutual connections"
    },
    {
        coverImg: pb,
        profileImg: m4,
        name: "Vivek Anand",
        about: "Automotive Engineer | E-Mobility Research",
        mutualText: "4 mutual connections"
    },
    {
        coverImg: pb,
        profileImg: f2,
        name: "Meera Nair",
        about: "Product Designer | User Research & Wireframing",
        mutualText: "Sanjana Patil and 27 other mutual connections"
    },
    {
        coverImg: pb,
        profileImg: m5,
        name: "Yashvardhan Sinha",
        about: "DevOps Engineer | CI/CD pipeline automation",
        mutualText: "Vikram Singh and 31 other mutual connections"
    },
    {
        coverImg: pb,
        profileImg: f3,
        name: "Anjali M",
        about: "MCA Student | Java & C++ Programmer",
        mutualText: "Nandini Gupta and 10 other mutual connections"
    }
];

    return (
        <div className='nright'>
            <div className='nright1 more container'>
                <h4>Grow</h4>
                <h4>Catch Up</h4>
            </div>
            <div className='nright2 container'>
                <div className='nright21'>
                    <div>
                        <p>Invitations</p>
                        <h3 className='more'>Show All</h3>
                    </div>
                    {requests.map((item, index) => (
                        <RequestContent key={index}
                            profileImg={item.profileImg}
                            name={item.name}
                            about={item.about}
                            mutualText={item.mutualText} />
                    ))}
                </div>

            </div>
            <div className='nright3 container'>
                <div className='nright31'>
                    <div>
                        <p>🔥 1-day streak</p>
                    </div>
                    <div>
                        {puzzle.map((item, index) => (
                        <Npuzzle key={index}
                            img={item.img}
                            name={item.name}
                            players={item.players} />
                    ))}
                    </div>
                </div>

            </div>
            <div className='nright4 container'>
                <div className='nright41'>
                    <div>
                        <p>People you may know from NMAM Institute of Technology</p>
                        <h3 className='more'>Show All</h3>
                    </div>
                    <div className='network-grid'>
                        {people.map((item, index) => (
                            <NetworkCard
                                key={index}
                                coverImg={item.coverImg}
                                profileImg={item.profileImg}
                                name={item.name}
                                about={item.about}
                                mutualImg={item.mutualImg}
                                mutualText={item.mutualText}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nright