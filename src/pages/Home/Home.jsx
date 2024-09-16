import Hero from '../../components/Hero/Hero'
import homeData from './../../data/pages/home/home.json'

function Home () {
  return (
    <div className='home'>
      <Hero data={homeData.hero} />
    </div>
  )
}

export default Home
