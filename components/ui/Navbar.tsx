import NextLink from 'next/link'
import {Link, Image, Spacer, Text, useTheme } from "@nextui-org/react"


export const Navbar = () => {

    const { theme } = useTheme()
    
  return (

    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        background: theme?.colors.gray50.value
    }}>

        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de la app"
            width={70}
            height={70}
        />
        
        <Link color="text" css={{ fontSize: '25px' }} href='/'>P</Link>
        <Link color="text" css={{ fontSize: '20px' }} href='/'>okemon</Link>

        <Spacer css={{ flex: 1 }}/>

        <Link color="text" css={{ fontSize: '20px' }} href='/favorites'>Favoritos</Link>

    </div>

  )
}
