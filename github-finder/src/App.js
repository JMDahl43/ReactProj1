import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { GithubProvider } from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' exact element={ <Home /> } />
              <Route path='/about' exact element={ <About /> } />
              <Route path='/notfound' exact element={ <NotFound /> } />
              <Route path='/*' exact element={ <NotFound /> } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  )
}

export default App
