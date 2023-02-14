import Banner from 'components/Banner'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import { useUsuario } from 'contextos/usuario'
import Erro from 'pages/Erro'
import Login from 'pages/Login'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Inicio.module.css'

export default function Inicio() {
    const [videos, setVideos] = useState([])
    const {usuario} = useUsuario()
    
    
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/brunobahy/cinetagapi/videos')
        .then(resposta => resposta.json())
        .then(dados => setVideos(dados))
    }, [])
    
    if(!usuario){
        return <Erro/>
    }
    
    return (
        <>
            <Banner imagem="home" />
            <Titulo><h1>Um lugar para guardar seus videos e filmes!</h1></Titulo>
            <section className={styles.container}>
                {videos.map(video => <Card {...video} key={video.id} />)}
            </section>
        </>
    )
}
