'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './fondo.css';
export default function Page() {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.post(
          'https://rickandmortyapi.com/api/character?page=15',
          {}
        );
        setUsers(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);
  return (
    <div>
      {' '}
      <h1></h1>{' '}
      {users.map((users, index) => (
        <div className="card" key={index}>
          <img className="avatar" src={users.image} alt={users.name} />

          <div className="info">
            <h2>{users.name}</h2>
            <p>
              <strong>Id: </strong> {users.id}
            </p>
            <p>
              <strong>Genero: </strong>
              {users.gender}
            </p>
            <p>
              <strong>Especie: </strong>
              {users.species}
            </p>
            <p>
              <strong>Estado: </strong>
              {users.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
