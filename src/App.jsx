import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import { SiteDataProvider } from './siteData.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Chapter from './pages/Chapter.jsx'
import Join from './pages/Join.jsx'
import Activities from './pages/Activities.jsx'
import Chapters from './pages/Chapters.jsx'
import Donors from './pages/Donors.jsx'
import Donate from './pages/Donate.jsx'
import Downloads from './pages/Downloads.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <SiteDataProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/join" element={<Join />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/chapter" element={<Chapter />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SiteDataProvider>
    </BrowserRouter>
  )
}
