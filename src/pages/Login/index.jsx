import { useUsuario } from 'contextos/usuario'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'
export default function Login() {
    const { usuario, mudaNome } = useUsuario()

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Cine Tag</h2>
            <p className={styles.texto}>Olá!</p>
            <p className={styles.texto}>seja bem vindo</p>
            <div className={styles.formulario}>
                <label htmlFor="nome" >insira seu nome</label>
                <input type="text" id='nome' value={usuario} onChange={(event) =>  mudaNome(event.target.value)} />
                
                {usuario.length >= 4 ?<Link to={'/inicio'} className={styles.proseguir} >Proseguir</Link> :''}
            </div>
        </div>
    )
}
