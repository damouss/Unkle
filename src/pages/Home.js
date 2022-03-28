import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation></Navigation>
            <div className='header py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <h1>Tooltips project home</h1>
                            <button class="btn btn-primary dark" type="submit">Hover me</button>
                            <button class="btn btn-primary pink" type="submit">Click me</button>
                        </div>
                        <div className='col-md-5'>
                            <img src='https://assets.website-files.com/61017ce461144e8b7ef7d545/6123a030ea94c8391e1ce4e0_svgexport-6.svg' className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>    
    );
};

export default Home;
