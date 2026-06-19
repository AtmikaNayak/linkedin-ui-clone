import React from 'react'
import './App.css';

import NewsContent from './NewsContent';
import Puzzle from './Puzzle'
import Footer from './Footer'

import patches from './assets/patches.svg'
import zip from './assets/zip.svg'
import sudoku from './assets/sudoku.png'
import tango from './assets/tango.png'
import pinpoint from './assets/pinpoint.png'
import queens from './assets/queens.png'
import i from './assets/i.png'
import down from './assets/down.png'

function Right() {
    const news = [
        {
            content: "IndiGo suspends flights to specific regions",
            analytics: "1 day ago ● 5,396 readers"
        },
        {
            content: "Tech hiring sees a slight uptick in Q3",
            analytics: "2 hours ago ● 12,402 readers"
        },
        {
            content: "Startups pivot to AI-driven solutions",
            analytics: "5 hours ago ● 8,110 readers"
        },
        {
            content: "New remote work policies announced",
            analytics: "14 hours ago ● 42,000 readers"
        },
        {
            content: "Top skills employers want in 2026",
            analytics: "1 day ago ● 105,396 readers"
        },
        {
            content: "Green energy sector creates new jobs",
            analytics: "2 days ago ● 3,211 readers"
        },
        {
            content: "Fintech investments hit record high",
            analytics: "3 days ago ● 15,800 readers"
        },
        {
            content: "How to negotiate your next salary",
            analytics: "4 days ago ● 67,200 readers"
        },
        {
            content: "The rise of fractional executives",
            analytics: "5 days ago ● 9,450 readers"
        },
        {
            content: "Bengaluru traffic drives infra updates",
            analytics: "1 week ago ● 22,104 readers"
        }
    ];
    const puzzle = [
        {
            img: patches,
            name: "Patches #82",
            players: "1 connection played"
        },
        {
            img: zip,
            name: "Zip #447",
            players: "3 connections played"
        },
        {
            img: sudoku,
            name: "Mini Sudoku #300",
            players: "12 connections played"
        },
        {
            img: tango,
            name: "Tango #82",
            players: "2 connections played"
        },
        {
            img: pinpoint,
            name: "Pinpoint #12",
            players: "Be the first to play"
        },
        {
            img: queens,
            name: "Queens #55",
            players: "8 connections played"
        }
    ];
    return (
        <div className='right'>
            <div className=' right1 container'>
                <div className='news'>
                    <div>
                        <h3>LinkedIn News</h3>
                        <img src={i}></img>
                    </div>
                </div>
                <h3 className='more'>Top stories</h3>
                {news.map((item, index) => (
                    <NewsContent key={index}
                        content={item.content}
                        analytics={item.analytics} />
                ))}
                <h3 className='more'>Show more news ▼</h3>
            </div>
            <div className='right2 container'>
                <h3>Today's puzzle</h3>
                {puzzle.map((item, index) => (
                    < Puzzle img={item.img}
                        name={item.name}
                        players={item.players} />
                ))}
                <h3 className='more'>Show more ▼</h3>
            </div>
            <Footer />
        </div>
    )
}

export default Right 