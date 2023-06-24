import { FC } from 'react';

import Head from 'next/head';

import { Navbar } from '../ui';

interface Props {
    children?: React.ReactNode,
    title?: string
  }

export const Layout : FC<Props> = ({ children, title }) => {

  const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin

  return (

    <>
        <Head>
            <title>{ title || 'PokemonApp' }</title>
            <meta name='author' content='Joaquin Barrandeguy' />
            <meta name='description' content={`Informacion sobre el pokemon ${ title }`}/>
            <meta name='keywords' content={`${ title }, pokemon, pokedex`}/>
            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={ `Esta es la pagina sobre ${ title }` } />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>

            { children }

        </main>
    </>

  )
}
