import './App.css';
import View from './components/users/View';
import Edit from './components/users/Edit';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <div className="main">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/view/:id" element={<View />} />
                    <Route exact path="/edit/:id" element={<Edit />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
