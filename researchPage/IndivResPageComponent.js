import React, { Component } from 'react';
import './Container.css';
import {indivCom, researchers, resCom} from './ResearcherData.js'


//Separate the components and functions here later 

//Component that designs basic individual researcher page without formatting 
export default class IndivResComponent extends Component {
    render() {
    return(
    <div>
    {/* Add the photo of the researcher */}
        <div>
        <img className="pImg" src= {this.props.photo}/>
        </div>  
        <br>
        </br>
        <br>
        </br>

    {/* Add the name of the researcher */}
        <div className = "name">
        {this.props.name}
        </div>

    {/* Add the description of the researcher */}
        <div className= "desc">
        {this.props.fdesc}
        </div>
    </div>
    ); 
}
}



//Using map function on components 
export const indivCom = researchers.map(researchera => <IndivResPageComponent photo = {researchera.photo} name = {researchera.name} fdesc = {researchera.fdesc}/>)

// If we cant map to create components, then we can use a for loop of this format: 
export function indivComLoop() {

const indivCom= [] 
   
for (var i=0; i < researchers.length; i++)
{
    {/*create a new component from IndivResPageComponent for each researcher - the question is how do you pass in researchers into the component as props?*/}
    var indCom= <IndivResPageComponent photo = {researchers[i].photo} name = {researchers[i].name} fdesc = {researchers[i].fdesc}/>
    indivCom.push(indCom)
}
return indivCom 
}



export function loopIndivResearchers() {

    
    //i representing the researcher component 
    for (var i=0; i < indivCom.length; i++)
    {
        <Route exact path= {resCom[i].wpage} component={indivCom[i]}></Route>
      {/* route stuff here */}
      {/* bc the lists indivCom and researchers, access each component and each researcher through index */}
      {/* Idea is that here you would route to the wpage of that component like researcher[i].wpage and the component is {indivCom[i]}
        The question is can you map to a component?*/}
    }

  
  }