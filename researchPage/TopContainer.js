import React, { Component } from 'react';
import './Container.css'; 
import {loopResearchers} from './ResearcherFunctions.js';
import LogoContainerComponent from '../../src/LogoContainer.js';
import CategoryButtonContainerComponent from '../../src/categoryButtonContainer.js'

//Renders a table of the researchers as a component 
export default class TopContainerComponent extends Component {
    render() {
      return (
        <div>
            <div class = "header">
              <LogoContainerComponent />
              <CategoryButtonContainerComponent />
            </div>
            <table class = "table"> 
              <tr>
              {loopResearchers()}
              </tr>
            </table>
        </div>
      ); 
    }
  }
