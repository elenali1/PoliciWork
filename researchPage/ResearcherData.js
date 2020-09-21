import React, { Component } from 'react';
import './Container.css';
import {ResearcherAComponent} from './ResearcherFunctions.js';

//ResearcherData File: A list of researchers and a list of the researchers turned into components 

//List of researchers: 
export const researchers = [
    {name: "Kermit the Frog", 
    photo: require('../../src/img/kermit.jpg'), 
    desc: "Cornell University, Biology Department",
    fdesc: "Kermit the Frog is a part of the cast of muppets. He loves to be loud and slightly obnoxious. He is currently part of the faculty at Cornell University in the Biology Deparment.",
    wpage: '/kermit-the-frog'
    }, 
    {name: "Miss Piggy", 
    photo: require('../../src/img/misspiggy.jpg'), 
    desc: "Princeton University, Sociology Department", 
    fdesc: "Miss Piggy loves to eat. She is a star in the muppets show and is an amazing singer. She is currently part of the Princeton University Sociology Department",
    wpage: '/miss-piggy'
    }, 
    {name: "Fozzie Bear", 
    photo: require('../../src/img/fozziebear.jpg'), 
    desc: "UOT, Agriculture Development",
    fdesc: "Fozzie Bear is a cute fuzzy bear who is currently at the University of Texas working as an Agriculture Developer",
    wpage: '/fozzie-bear'
    }, 
    {name: "Gonzo", 
    photo: require('../../src/img/Gonzo2.jpg'), 
    desc: "Swarthmore College, Liberal Arts",
    fdesc: "Gonzo is a forgetable charater in the Muppets. He is currently at Swarthmore College learning liberal arts, whatever that means",
    wpage: '/gonzo'
    }, 
    {name: "Rowlf", 
    photo: require('../../src/img/rowlf.jpg'), 
    desc: "Yale University, Science Stuff",
    fdesc: "Rowly is supposedly doing science stuff at Yale. Very difficult stuff. Ask him about quantum mechanics ",
    wpage: '/rowlf'
    }, 
    {name: "Some random Dartmouth Kid", 
    photo: require('../../src/img/kermit2.jpeg'), 
    desc: "Dartmouth University, Middle of Nowhere", 
    fdesc: "Dartmouth kids actually live in the middle of nowhere, unlike Cornellians. They like to throw darties",
    wpage: '/darmouth-kid'
    }, 
    {name: "Walter", 
    photo: require('../../src/img/walterlinz.jpg'), 
    desc: "Polici Kid, Coolest of them All",
    fdesc: "Lucky coincidence that Walter is actually a part of the the Polici team as the Content Director. He hosts great meetings", 
    wpage: '/walter'
    }, 
    {name: "Beaker", 
    photo: require('../../src/img/beaker.jpg'), 
    desc: "Strange Scientist", 
    fdesc:"Beaker often wonders why he is the only person named after a thing. Maybe because he loves science that much. Ask him about CO2", 
    wpage: '/beaker'
    }, 

   ]

export const resCom= researchers.map(researcher => <ResearcherAComponent photo= {researcher.photo} name = {researcher.name} desc= {researcher.desc} wpage = {researcher.wpage}/>) 
