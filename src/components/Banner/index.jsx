import React from 'react'
import styles from './Banner.module.css'

export default function Banner({imagem}) {
    return (
        <div className={styles.capa} style={{ background: `url('/assets/imagens/banner-${imagem}.png')` }}>

        </div>
    )
}
