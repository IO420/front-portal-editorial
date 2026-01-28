'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Lange() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get(
          'https://rickandmortyapi.com/api/character?page=1'
        );
        setUsers(response.data.results);
        console.log(response.data.results[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getCharacters();
  }, []);

  return (
    <div>
      <h1>Hi</h1>

      {users.length > 0 && <p>{users[0].name}</p>}
      <img src={users[0].image} alt="" width={50} />
    </div>
  );
}
