import UiItem from '../../components/UiItem/UiItem'
import Hero from './../../components/Hero/Hero'
import Collapsable from './../../components/Collapsable/Collapsable'

import modulesData from './../../data/modules/modules.json'

export default function Modules () {
  return (
    <div className='rv-uikit'>
      <Collapsable title='Hero'>
        <UiItem title='Hero'>
          <Hero data={modulesData.hero.primary} />
        </UiItem>

        <UiItem title='Hero Secondary'>
          <Hero data={modulesData.hero.secondary} />
        </UiItem>

        <UiItem title='Hero FullWidth'>
          <Hero data={modulesData.hero.fullwidth} />
        </UiItem>
      </Collapsable>
    </div>
  )
}
