import React, { lazy, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useNotification } from '../utils/_useNotification.js'
import { metadata } from 'vfs-interest-rate-config'
import { Home } from './Home.jsx'
import { SideNav } from './SideNav.jsx'
import { convertToKebabCase } from '../utils/_general.util.js'
import { GenericTemplate } from './GenericTemplate.jsx'
import { mockUsersSubscriptions} from '../../mock/mockUsersSubscriptions.js';

const Component = lazy(() => import('vfs-interest-rate-config'))

const App = () => {
  const [count, setCount] = useState(0)

  const { addNotification, closeNotification } = useNotification()

  const dummyState = {
    count,
    setCount,
    addNotification,
    closeNotification,
    environment: 'dev',
    getSubscribedApps: () => mockUsersSubscriptions
  }

  const exampleComponentLink = `/${convertToKebabCase(metadata.title)}`

  return (
    <BrowserRouter>
      <SideNav icon={metadata.icon} link={exampleComponentLink}/>
      <main>
        <Routes>
          <Route exact path="/" element={<Home dataToolTemplateInfo={metadata}/>}/>
          {metadata &&
          <Route
            path={exampleComponentLink}
            exact
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <GenericTemplate>
                  <Component state={dummyState}/>
                </GenericTemplate>
              </React.Suspense>
            }
          />
          }
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
