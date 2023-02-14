import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "favoritos";

export default function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);

    return (
        <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
            {children}
        </FavoritosContext.Provider>
    )
}


export function useFavoritoContext() {
    const { favoritos, setFavoritos } = useContext(FavoritosContext)

    function favoritar(novoFavorito) {
        const favoritoRepetido = favoritos.find(favorito => favorito.id === novoFavorito.id)

        if (!favoritoRepetido) {
            return (
                setFavoritos([...favoritos, novoFavorito])
            )
        }

        return setFavoritos(favoritos.filter(favorito => favorito.id !== novoFavorito.id))
    }

    

    return {
        favoritos,
        favoritar
    }
}