import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </Router>
    )
}

export default App
