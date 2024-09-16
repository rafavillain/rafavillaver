import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Uikit from './pages/Uikit/Uikit'
import Blocks from './pages/Blocks/Blocks'
import Home from './pages/Home/Home'

import Hero from './components/Hero/Hero'

import modulesData from './data/modules/modules.json'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/uikit' element={<Uikit />} />
          <Route path='/blocks' element={<Blocks />} />
          {/* <Route path="/modules" element={<Modules />} /> */}
          <Route path='/hero' element={<Hero data={modulesData.hero.primary} />} />
          <Route path='/hero-secondary' element={<Hero data={modulesData.hero.secondary} />} />
          <Route path='/hero-fullwidth' element={<Hero data={modulesData.hero.fullwidth} />} />
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
