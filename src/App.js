import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import Neha from './components/Projects/Neha'

function App() {
    return (
        <Router>
            <main>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/neha" element={<Neha />} />
                    <Route path="/skills" element={<Skills />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </main>
        </Router>
    )
}

export default App
