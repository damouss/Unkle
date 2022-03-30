import React from 'react';
import { HoverTooltip } from '../components/HoverTooltip';
import Navigation from '../components/Navigation';
import PasswordTooltip from '../components/PasswordTooltip';
import ClickTooltip from '../components/ClickTooltip';
import ScrollBox from '../components/ScrollBox';
const Home = () => {
    return (
        <div className="home">
            <Navigation></Navigation>
            <section className='header py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <h1>Tooltips project</h1>
                            <ScrollBox>
                                <ClickTooltip></ClickTooltip>
                            </ScrollBox> 
                        </div>
                        <div className='col-md-5'>
                            <img src='https://assets.website-files.com/61017ce461144e8b7ef7d545/6123a030ea94c8391e1ce4e0_svgexport-6.svg' className='img-fluid' alt='banner house'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='input-password py-5'>
                <div className='container'>
                    <h2 className='text-center'>Password settings with rules display</h2>
                    <p className='text-center'>Visible on click</p>
                    <ScrollBox>
                        <PasswordTooltip></PasswordTooltip>
                    </ScrollBox>
                </div>
            </section>
            <section className='bg-blue-light py-5'>
                <div className='container text-center'>
                    <h2 className='mb-3'>Hover tooltip</h2>                    
                    <HoverTooltip text="I'm a tooltip">
                        <button className='btn btn-primary dark'>Hover me</button>
                    </HoverTooltip>
                </div>
            </section>
        </div>    
    );
};

export default Home;
