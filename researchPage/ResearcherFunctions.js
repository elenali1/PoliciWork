import React, { Component } from 'react';
import './Container.css'; 
import {resCom} from './ResearcherData.js'


//ResearcherFunctions File: Function to make components and a function that loops over researchers 


//Making a component for each researcher 
export function ResearcherAComponent(props)
{
    return(
    <div className = "tdc">
    {/*Add link of more detailed description of the researcher */}

    <a href =  {props.wpage}>

    {/* Add the photo of the researcher */}
    <div>
    <img className="circular--square" src= {props.photo}/>
    </div>  
    <br>
    </br>

    {/* Add the name of the researcher */}
    <div className = "name">
    {props.name}
    </div>

    {/* Add the description of the researcher */}
    <div className= "desc">
    {props.desc}
    </div>

    </a>
    </div>
    );
}
//Make a list of researcher components 


//Loop over the reserachers and create a new row every 4 researchers 
export function loopResearchers() {

  //empty list for the researchers with correct formatting 
  const looped= []
  
  //i representing the researcher component 
  for (var i=0; i < resCom.length; i++)
  {
    //every 5th researcher, create a new row 
    if(i%4==0)
    {
      looped.push(
        <tr>
        </tr>
      )
    }
//add the researcher component at i-1 as a new cell 
      looped.push(
      <td className = "tdspace">

      {resCom[i]}

      </td>
      );
  }
  //return the list
  return(
    <div>
   {looped}
   </div> 
  )

}