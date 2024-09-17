import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Uikit from './pages/Uikit/Uikit'
import Blocks from './pages/Blocks/Blocks'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'

import Hero from './components/Hero/Hero'

import modulesData from './data/modules/modules.json'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path='/uikit' element={<Uikit />} />
          <Route path='/blocks' element={<Blocks />} />

          <Route path='/hero' element={<Hero data={modulesData.hero.primary} />} />
          <Route path='/hero-secondary' element={<Hero data={modulesData.hero.secondary} />} />
          <Route path='/hero-fullwidth' element={<Hero data={modulesData.hero.fullwidth} />} />

          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
