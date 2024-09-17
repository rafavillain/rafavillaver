import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Collapsable from './../../components/Collapsable/Collapsable'
import Button from './../../components/Button/Button'
// import isMobile from './../../assets/js/_utils'

export default function Dashboard () {
  const menuItems = [
    {
      href: '/uikit',
      title: 'Uikit'
    },
    {
      href: '/blocks',
      title: 'Blocks'
    },
    {
      href: '/modules',
      title: 'Modules',
      items: [
        {
          href: '/hero',
          title: 'Hero'
        },
        {
          href: '/hero-secondary',
          title: 'Hero secondary'
        },
        {
          href: '/hero-fullwidth',
          title: 'Hero fullwidth'
        }
      ]
    },
    {
      href: '/pages',
      title: 'Pages',
      items: [
        {
          href: '/',
          title: 'Home'
        },
        {
          href: '/contact',
          title: 'Contact'
        }
      ]
    }
  ]
  const windowWidth = window.innerWidth
  const isMobile = windowWidth < 768
  const [filteredData, setFilteredData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [hideAside, setHideAside] = useState(isMobile)

  // Update filteredData whenever searchTerm changes
  useEffect(() => {
    // Function to recursively search for a term within an object
    const searchInObject = (obj, term) => {
      for (const key in obj) {
        if (typeof obj[key] === 'object') {
          if (searchInObject(obj[key], term)) {
            return true
          }
        } else if (typeof obj[key] === 'string' && obj[key].toLowerCase().includes(term.toLowerCase())) {
          return true
        }
      }
      return false
    }

    const filtered = menuItems.filter((api) => searchInObject(api, searchTerm))

    setFilteredData(filtered)
  }, [searchTerm])

  return (
    <div className={hideAside ? 'rv-dashboard rv-dashboard--hidden' : 'rv-dashboard'}>
      <Button
        uiType='inverted'
        extraClass='rv-dashboard__toggle-aside rv-button--icon-only'
        iconName={hideAside ? 'menu' : 'arrow_forward_ios'}
        onClick={() => {
          setHideAside(!hideAside)
        }}
      />

      <aside className='rv-dashboard__aside'>

        <header className='rv-dashboard__header'>
          RV logo
        </header>

        <div className='rv-dashboard__menu'>
          <div className='rv-dashboard__search'>
            <input
              hidden
              type='text'
              placeholder='Search Page, Module...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <nav>
            <ul className='rv-dashboard__ui-menu'>
              {filteredData.map(({ href, title, items }) => (
                <li className='rv-dashboard__ui-group' key={title}>
                  {items &&
                    <>
                      <Collapsable extraClass='collapsable--m' title={title}>
                        <ul className='rv-dashboard__ui-items-group'>
                          {Object.values(items).map(({ href, title }) => (
                            <li className='rv-dashboard__ui-item' key={title}>
                              <NavLink
                                to={href}
                                onClick={() => {
                                  setHideAside(true)
                                }}
                              >
                                <p>{title}</p>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </Collapsable>
                    </>}

                  {!items &&
                    <NavLink
                      to={href}
                      onClick={() => {
                        setHideAside(true)
                      }}
                    >
                      <p className='t-h4'>{title}</p>
                    </NavLink>}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      <main className='rv-dashboard__main'>
        <Outlet />
      </main>
    </div>
  )
}
