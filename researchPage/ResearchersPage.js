import React, { Component } from 'react';
import '../landingPage/LandingPage.css';
import TopContainerComponent from './TopContainer.js'; 
import CategoryButtonContainerComponent from '../../src/categoryButtonContainer.js'
 
export default class ResearchersPage extends Component {

  
    render() {
      return (
          
        
            <div >
              <div class="header">
                <img src={require('../../src/img/Logo.png')} class="center" />
              </div>
              <div>
                <CategoryButtonContainerComponent />
              </div>
              {/* Add the Researcher*/}
              <div>
                  <TopContainerComponent/>
              </div>
            </div>
      );
    }
  }
  
