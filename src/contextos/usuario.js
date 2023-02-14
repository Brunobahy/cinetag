import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const UsuarioContext = createContext();
UsuarioContext.displayName = 'Usuario';

export default function UsuarioProvider({ children }) {
    const [usuario, setUsuario] = useState('')
    const [local, setLocal] = useState('')

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario, local, setLocal }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export function useUsuario() {
    const { usuario, setUsuario, local, setLocal} = useContext(UsuarioContext)

    function mudaNome(nome) {
        setUsuario(nome)
    }

    return {
        usuario,
        setUsuario,
        mudaNome
    }

}