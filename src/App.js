import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Freelancer from './components/Projects/Freelancer'
import Placeholder from './components/Projects/Placeholder'

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
                    <Route
                        path="/projects/placeholder"
                        element={<Placeholder />}
                    />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
                <Footer />
            </main>
        </Router>
    )
}

export default App
