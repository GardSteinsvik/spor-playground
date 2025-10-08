import {CargonetLogo, Language, Separator, SporProvider, Stack, themes, useColorMode} from '@vygruppen/spor-react'
import type {ReactNode} from 'react'
import {isRouteErrorResponse, Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration} from 'react-router'
import type {Route} from './+types/root'

export const links: Route.LinksFunction = () => [
  {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
]

export function Layout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SporProvider language={Language.NorwegianBokmal} theme={themes.CargoNet}>
          {children}
        </SporProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  )
}

function RootLayout({children}: {children: ReactNode}) {
  const {colorMode} = useColorMode()
  return (
    <Stack gap={2} minHeight={'100dvh'} alignItems={'center'} padding={4}>
      <NavLink to={'/'} style={{width: 200}}>
        <CargonetLogo colorPalette={colorMode} />
      </NavLink>
      <Separator />
      {children}
    </Stack>
  )
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <RootLayout>
      <main className="pt-16 p-4 container mx-auto">
        <a href={'/'}>Tilbakers</a>
        <h1>{message}</h1>
        <p>{details}</p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto">
            <code>{stack}</code>
          </pre>
        )}
      </main>
    </RootLayout>
  )
}
