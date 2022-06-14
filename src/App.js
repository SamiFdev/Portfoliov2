import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Freelancer from './components/Projects/Freelancer'

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
                    <Route
                        path="/projects/freelancer"
                        element={<Freelancer />}
                    />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App
