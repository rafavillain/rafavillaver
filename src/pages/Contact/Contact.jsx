import Hero from '../../components/Hero/Hero'
import contactData from '../../data/pages/contact.json'

function Home () {
  return (
    <div className='rv-home'>
      <Hero data={contactData.hero} />
    </div>
  )
}

export default Home
