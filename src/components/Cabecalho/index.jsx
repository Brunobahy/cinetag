import CabecalhoLink from 'components/CabecalhoLink';
import { useUsuario } from 'contextos/usuario';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './logo.png';

export default function Cabecalho() {
    const { usuario } = useUsuario()
    let local = useLocation().pathname

    if (local == '/') {
        return ''
    }
    if (!usuario) {
        return (

            <header className={styles.cabecalhoErro}>
                <CabecalhoLink url={'./'}>
                    Voltar ao login
                </CabecalhoLink>
            </header>
        )
    }

    return (

        <header className={styles.cabecalho}>
            <Link to={'./inicio'}>
                <img src={logo} alt='Logo do Cinetag' />
            </Link>
            <nav>
                <CabecalhoLink url={"./inicio"}>
                    Home
                </CabecalhoLink>
                <CabecalhoLink url={'./Favoritos'}>
                    Favoritos
                </CabecalhoLink>
                <CabecalhoLink url={'./'}>
                    {usuario}
                </CabecalhoLink>
            </nav>
        </header>
    )
}
