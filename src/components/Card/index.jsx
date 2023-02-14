import { useFavoritoContext } from 'contextos/favoritos';
import React from 'react';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

export default function Card({ id, titulo, capa }) {
  const { favoritos, favoritar } = useFavoritoContext()
  const ehFavorito = favoritos.find(favorito => favorito.id === id)
  const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar

  return (
    <div className={styles.container} key={id}>
      <Link className={styles.link} to={`/videos/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img src={icone} alt="Favoritar Filme" className={styles.favoritar} onClick={() => favoritar({ id, titulo, capa })} />
    </div>
  )
}
