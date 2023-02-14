import Cabecalho from 'components/Cabecalho'
import Container from 'components/Container'
import Favoritos from 'components/Favoritos'
import Rodape from 'components/Rodape'
import Inicio from 'pages/Inicio'
import React from 'react'
import FavoritosProvider from 'contextos/favoritos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Erro from 'pages/Erro'
import Player from 'pages/Player'
import PaginaBase from 'pages/PaginaBase'
import Login from 'pages/Login'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaBase />}>
          <Route index element={<Login />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path={'/favoritos'} element={<Favoritos />}></Route>
          <Route path='/videos/:id' element={<Player />} />
          <Route path='*' element={<Erro />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}
