import Cabecalho from 'components/Cabecalho'
import Container from 'components/Container'
import Rodape from 'components/Rodape'
import FavoritosProvider from 'contextos/favoritos'
import UsuarioProvider, { useUsuario } from 'contextos/usuario'
import Erro from 'pages/Erro'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function PaginaBase() {
    return (
        <main>
            <UsuarioProvider>
                <Cabecalho />
                <FavoritosProvider>
                    <Container>
                        <Outlet />
                    </Container>
                </FavoritosProvider>
                <Rodape />
            </UsuarioProvider>
        </main>
    )
}
