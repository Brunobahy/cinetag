import { useUsuario } from 'contextos/usuario'
import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Rodape.module.css'

export default function Rodape() {

  let local = useLocation().pathname
  const {usuario} = useUsuario()

  if (local === '/' || !usuario) {
    return ''
  }

  return (
    <footer className={styles.rodape}>
      <p>Desenvolvido por Alura.</p>
    </footer>
  )
}
