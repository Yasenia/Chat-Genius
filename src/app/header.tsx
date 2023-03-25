import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Header: FunctionComponent = () => (
  <header className="flex items-center justify-end border-b bg-white p-4">
    <a href="https://github.com/Yasenia/Chat-Genius" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
      <FontAwesomeIcon icon={faGithub} className="text-gray-800 transition-colors hover:text-gray-600" size="2x" />
    </a>
  </header>
)

export default Header
