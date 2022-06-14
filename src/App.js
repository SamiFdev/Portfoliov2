import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import Neha from './components/Projects/Neha'
import Footer from './components/Footer'

function App() {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="pageContent">
                                <Home />
                            </div>
                        }
                    />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/neha" element={<Neha />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
                <Footer />
            </main>
        </Router>
    )
}

export default App
