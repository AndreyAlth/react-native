import { useEffect, useRef, useState } from "react"
import { reqRes } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interfaces/reqRes"
export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  const paginaRef = useRef(1)

  useEffect(() => {
    cargarUsuarios()
  }, [])

  const cargarUsuarios = async () => {
    const resp = await reqRes.get<ReqResListado>("/users", {
      params: {
        page: paginaRef.current
      }
    })

    if(resp.data.data.length > 0){
      setUsuarios(resp.data.data)
      paginaRef.current++
    }
    else{
      alert('no hay mas registros')
    }
  }

  const renderItem = ({
    id,
    first_name,
    last_name,
    email,
    avatar,
  }: Usuario) => {
    return (
      <tr key={id.toLocaleString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 50, borderRadius: 100 }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    )
  }

  return (
    <>
      <h3>Usuarios</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
      </table>
      <button className='btn btn-primary' onClick={cargarUsuarios}>Siguientes</button>
    </>
  )
}
