import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            
        </div>
    )
}

ReactDom.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/about' element={<h1>About</h1>} />
    </Routes>
    
    </BrowserRouter>
);