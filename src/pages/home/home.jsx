import React from 'react';
import Navbar from '../../components/Navbar';

function Home() {
    
    return (
        <>
        <Navbar />
        <div className="text-3xl font-bold underline font-Lobster text-center mt-20">
            <h1>Welcome Home page</h1>
            <p>This is the home page.</p>
        </div>
        </>
    )
}

export default Home;