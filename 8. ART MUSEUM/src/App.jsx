import { Route, Routes } from 'react-router-dom'
import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation.jsx'
import harvardArt from './data/harvardArt.js'
import GalleryView from './components/GalleryView/GalleryView.jsx'
import Home from './components/Home/Home.jsx'
import ArtDescription from './components/ArtDescription/ArtDescription.jsx'
import { useState } from 'react'

function App() {
  const [art, setArt] = useState(null)

  const getArt = (artProp) => {
    setArt(artProp)
  }

  return (
    <>
      <div className="App">
        <GalleryNavigation galleries={harvardArt.records}/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gallery/:galleryId" element={<GalleryView  galleries={harvardArt.records} setArt={getArt}/>}>
              <Route path="art/:artId" element={<ArtDescription art={art}/>}/>
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>}/>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
