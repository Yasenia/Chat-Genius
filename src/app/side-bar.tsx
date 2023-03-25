'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat, faRobot, faBook } from '@fortawesome/free-solid-svg-icons'
import classname from 'classnames'

const navItems = [
  {
    title: 'AI Tools',
    icon: <FontAwesomeIcon icon={faRobot} />,
    path: '',
    children: [{ path: '/name-my-pet', title: 'Name my pet', icon: <FontAwesomeIcon icon={faCat} /> }],
  },
  {
    title: 'About',
    icon: <FontAwesomeIcon icon={faBook} />,
    path: '/about',
    children: [],
  },
]

const Sidebar: FunctionComponent = () => {
  const pathname = usePathname()

  return (
    <aside className="w-60 bg-gray-800">
      <div className="px-6 pt-6">
        <Link href="/">
          <h1 className="mb-4 cursor-pointer text-xl font-semibold text-gray-100">Chat Genius</h1>
        </Link>
      </div>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={item.path || index}>
              {item.children.length > 0 ? (
                <div
                  className={classname([
                    'block flex w-full flex-row items-center justify-between px-4 py-2 text-gray-100',
                    {
                      'bg-gray-700': pathname === item.path,
                      'hover:bg-gray-700': pathname !== item.path,
                    },
                  ])}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.path}
                  className={classname([
                    'block flex w-full flex-row items-center justify-between px-4 py-2 text-gray-100',
                    {
                      'bg-gray-700': pathname === item.path,
                      'hover:bg-gray-700': pathname !== item.path,
                    },
                  ])}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </div>
                </Link>
              )}
              {item.children.length > 0 && (
                <ul>
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <Link
                        href={child.path}
                        className={classname([
                          'block flex w-full flex-row items-center py-2 pl-8 text-gray-100',
                          {
                            'bg-gray-700': pathname === child.path,
                            'hover:bg-gray-700': pathname !== child.path,
                          },
                        ])}
                      >
                        {child.icon}
                        <span className="ml-2">{child.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
