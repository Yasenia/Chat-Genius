import '@/styles/globals.scss'

import Sidebar from '@/app/side-bar'
import Header from '@/app/header'
import { FunctionComponent, ReactNode } from 'react'

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <body>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex flex-grow flex-col">
          <Header />
          <main className="flex-grow bg-white p-6">
            <div className="min-h-screen">
              <div className="container mx-auto py-8 px-4">
                <div className="mx-auto max-w-4xl">{children}</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </body>
  </html>
)

export default Layout
