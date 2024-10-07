import { useEffect, useState } from 'react'
import {playerApi} from '../api/player.jsx'
import Toolbar from '../components/Toolbar.jsx'
import Modal from '../components/Modal.jsx'

const loopingPlayer = (players, onManage) => {
  return players.map((player) => (
      <tr key={player.ID} className='align-middle'>
        <td>{player.ID}</td>
        <td>{player.Name}</td>
        <td>{player.Phone}</td>
        <td>{player.Email}</td>
        <td>
          <div className="float-end">
            <button type='button' className='btn btn-warning px-4 py-1 me-2' onClick={() => onManage(player, 'edit')}>
              <i className="bi bi-pencil-fill fs-6"></i>
            </button>
            <button type='button' className='btn btn-danger px-4 py-1' onClick={() => onManage(player, 'delete')}>
              <i className="bi bi-trash-fill fs-6"></i>
            </button>
          </div>
        </td>
      </tr>
    )
  )
}

const loader = () => {
  return Array(5).fill(null).map((_, i) => (
    <tr key={i} className='loader'>
      <td><div className='w-25 blink-div'></div></td>
      <td><div className='w-100 blink-div'></div></td>
      <td><div className='w-100 blink-div'></div></td>
      <td><div className='w-100 blink-div'></div></td>
      <td><div className='w-100 blink-div float-end'></div></td>
    </tr>
  ))
}

const Player = () => {
  const { players, loading, error } = playerApi();
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ showModal, setShowModal ] = useState(false)
  const [ playerInfo, setPlayerInfo ] = useState(null);
  const [ action, setAction ] = useState('');

  useEffect(() => {
    if (error) {
      setErrorMessage(error.message);
      return;
    }
  }, [error])

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = (player, action) => {
    setAction(action)
    setPlayerInfo(player);
    setShowModal(true);
  }

  return (
    <>
      <Toolbar onCreateClick={() => openModal(null, 'create')} />

      <table className="table">
        <thead>
          <tr>
            <th scope="co fs-2">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">PHONE</th>
            <th scope="col">EMAIL</th>
            <th scope="col" className="text-end">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            loading 
            ? loader() 
            : loopingPlayer(players, openModal) 
          }
        </tbody>
      </table>

      { // if error
        error && (
          <div className="alert alert-danger position-fixed bottom-0 start-50 translate-middle-x" role="alert">
            {errorMessage}
          </div>
        )
      }

      { // modal
        showModal && (
          <Modal 
            modal={closeModal}
            player={playerInfo}
            action={action}
          />
      )}


    </>
  )
}

export default Player