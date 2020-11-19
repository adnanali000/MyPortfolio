import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/content';
import Footer from '../components/Footer';

function AboutPage(props){
    return(
       <div>
           <Hero title = {props.title} />

           <Content>
                <p>Hello, my name is Adnan. I'm  full stack engineer with experience in Angular , AngularJS, Express JS, Node JS,Oracle SQL, MongoDB, and React.</p>
                <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>
                <p>I'm constantly learning new things.Currently those things include gaining move expereince with MongoDB,React,Express JS and Node JS.</p>
            </Content>
        </div>
        
    )
}
export default AboutPage;