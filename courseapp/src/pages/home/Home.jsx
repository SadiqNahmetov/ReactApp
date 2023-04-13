import React from 'react';
import Slider from '../../components/slider/Slider';
import Box from '../../components/box/Box';
import RegisterCourse from '../../components/registerSearchCourse/RegisterCourse';
import Service from '../../components/services/Service';
import Event from '../../components/event/Event';
import Card from '../../components/card/Card';
import Student from '../../components/student/Student';
import '../../assets/styles/Home.css';
import Title from '../../components/title/Title';


function Home() {
    return (
        <>
            <Slider />
            <Box />
            <Title />
            <Card />
            <RegisterCourse />
            <Service />
            <Student />
            <Event />
          
        </>
    )
}

export default Home;