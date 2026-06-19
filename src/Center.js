import React from 'react'
import './App.css';

import Navmenu from './Navmenu.js'
import HomeCards from './HomeCards.js'

import profile from './assets/profile.jpeg'
import video from './assets/video.png'
import image from './assets/image.png'
import article from './assets/article.png'
import atmika from './assets/atmika.jpeg'
import earth from './assets/earth.png'

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

function Center() {
    const card = [
    {
        img: f1,
        name: "Anusha Sharma",
        about: "Aspiring tech enthusiast | CSE Student",
        time: '2h',
        desc: 'Thrilled to share that I have successfully completed the Advanced React course! Looking forward to building more dynamic web applications. 🚀 #ReactJS #WebDevelopment',
        pic: p1
    },
    {
        img: m1,
        name: "Rahul Sharma",
        about: "Software Engineer Intern at TechCorp | NMAMIT '25",
        time: '5h',
        desc: 'Just published a new article on optimizing CSS Grid layouts. Check it out and let me know your thoughts in the comments! 👇',
        pic: p2
    },
    {
        img: f2,
        name: "Sneha Rao",
        about: "UI/UX Designer | Creating intuitive digital experiences",
        time: '12h',
        desc: 'Attended an amazing workshop on Figma prototyping today. The design community here in Bengaluru is incredibly supportive! ✨',
        pic: p3
    },
    {
        img: m2,
        name: "Karthik Shetty",
        about: "Data Science Enthusiast | Python | SQL",
        time: '1d',
        desc: 'Finally cracked that LeetCode Hard problem that has been bugging me all week! Consistency really is the key. 💻 #Coding #DataStructures',
        pic: p4
    },
    {
        img: f3,
        name: "Pooja Hegde",
        about: "Cloud Computing Student | AWS Certified",
        time: '1d',
        desc: 'I am happy to share that I’ve obtained a new certification: AWS Certified Cloud Practitioner! ☁️',
        pic: p1
    },
    {
        img: m3,
        name: "Vikram Singh",
        about: "Cybersecurity Analyst | Ethical Hacker",
        time: '2d',
        desc: 'Security is not an afterthought, it is a feature. Great discussions at the cybersecurity summit today regarding zero-trust architecture.',
        pic: p2
    },
    {
        img: f4,
        name: "Ananya Desai",
        about: "Frontend Developer | Open Source Contributor",
        time: '3d',
        desc: 'My first pull request to an open-source project just got merged! Such a great feeling to contribute to the community. 🌐',
        pic: p3
    },
    {
        img: m4,
        name: "Rohan Kumar",
        about: "Product Manager | Agile | Scrum",
        time: '1w',
        desc: 'What is your favorite productivity tool? I have been trying out Notion recently and it has completely changed my workflow.',
        pic: p4
    },
    {
        img: f1,
        name: "Meghana Bhat",
        about: "AI/ML Researcher | Deep Learning",
        time: '1w',
        desc: 'Fascinating read on the future of LLMs and prompt engineering. The landscape of AI is shifting so rapidly.',
        pic: p1
    },
    {
        img: m5,
        name: "Aditya Verma",
        about: "Student at NMAM Institute of Technology | ECE",
        time: '2w',
        desc: 'Finished my final year project on IoT-based home automation. Huge thanks to my team and mentors for the support! 🔌',
        pic: p2
    }
];
    return (
        <div className='center'>
            <div className='center1 container'>
                <div className='center11'>
                    <img src={atmika}></img>
                    <input type='text' placeholder='Start a post'></input>
                </div>
                <div className='center12'>
                    <Navmenu img={video} content="Video" className='icon2' />
                    <Navmenu img={image} content="Photo" className='icon2' />
                    <Navmenu img={article} content='Write article' className='icon2' />
                </div>
            </div>
            <div className='center2'>
                <hr></hr>
                <p>Sort by:Top ▼</p>
            </div>
            {card.map((item,index)=>(
                <HomeCards
                img={item.img}
                name={item.name}
                about={item.about}
                time={item.time}
                desc={item.desc}
                pic={item.pic}
            />
            ))}
        </div>
    )
}

export default Center