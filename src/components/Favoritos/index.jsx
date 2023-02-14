import Banner from 'components/Banner'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import { useFavoritoContext } from 'contextos/favoritos'
import React from 'react'
import styles from './Favoritos.module.css'

export default function Favoritos() {
    const {favoritos} = useFavoritoContext()
    return (
        <>
            <Banner imagem={'favoritos'} />
            <Titulo><h1>Meus Favoritos</h1></Titulo>
            <section className={styles.container}>
                {favoritos.map(favorito => <Card {...favorito} key={favorito.id}/>) }
            </section>
        </>
    )
}