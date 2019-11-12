/** @jsx jsx */
import * as React from 'react'
import { Global, css } from '@emotion/core'
import { jsx, Styled } from 'theme-ui'

import { Location } from '@reach/router'

import { Transition } from '../components/Transition'
import { HeaderContainer } from '../components/Header'
import { LightPanel } from '../components/LightPanel'
import { ContentContainer } from '../components/Content'
import { SideBarContainer } from '../components/SideBar/SideBar.Container'

import { SideBarProvider } from '../components/SideBarContext'
import { IPathname } from '../types'

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          body {
            position: relative;
            margin: 0;
            min-height: 100%;
            min-width: 320px;
          }
        `}
      />

      <Styled.div
        sx={{
          margin: '0 auto',
          backgroundColor: 'background',
          maxWidth: theme => theme.breakpoints[3]
        }}
      >
        <SideBarProvider>
          <Location>
            {({ location }) => {
              const { pathname }: IPathname = location
              return (
                <React.Fragment>
                  <HeaderContainer pathname={pathname} />
                  <SideBarContainer />
                  <LightPanel />
                  <ContentContainer>
                    <Transition pathname={pathname}>{children}</Transition>
                  </ContentContainer>
                </React.Fragment>
              )
            }}
          </Location>
        </SideBarProvider>
      </Styled.div>
    </React.Fragment>
  )
}

export default Layout