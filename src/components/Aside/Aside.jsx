import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Collapsable from './../Collapsable/Collapsable'

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
      }
    ]
  }
]

export default function Aside () {
  const [filteredData, setFilteredData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

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
    <div className='rv-aside'>
      <div className='rv-aside__search'>
        <input
          type='text'
          placeholder='Search Page, Module...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <nav>
        <ul>
          {filteredData.map(({ href, title, items }) => (
            <li key={title}>
              {items &&
                <>
                  <Collapsable title={title}>
                    <ul>
                      {Object.values(items).map(({ href, title }) => (
                        <li key={title}>
                          <NavLink to={href}>
                            <p>{title}</p>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </Collapsable>
                </>}

              {!items &&
                <NavLink to={href}>
                  <p className='t-h4'>{title}</p>
                </NavLink>}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
