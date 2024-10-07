import { api } from '../config/const.js'
import { useEffect, useState } from "react";

const url = api.URL + '/player'

export const playerApi = () => {
  const [ players, setPlayers ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(null)


  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await fetch(`${url}/getAll`)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setPlayers(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getAll()
  }, [ url ])

  const create = async (newPlayer) => {
    try {
      setLoading(true)
      const response = await fetch(`${url}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlayer),
      })
      
      if (!response.ok) {
        throw new Error(`Failed to create player, status: ${response.status}`);
      }

      const result = await response.json();
      setPlayers((prevPlayers) => [...prevPlayers, result.data]);
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { create, players, loading, error }
}
