import axios from 'axios';
import { GET_ROSTER, ADD_PLAYER, REMOVE_PLAYER } from './actionTypes';
import { addError } from './errors';

const baseURL = 'https://players-api.developer.alchemy.codes/api';

export const handleGetRoster = roster => ({
  type: GET_ROSTER,
  roster,
});

export const handleAddPlayer = player => ({
  type: ADD_PLAYER,
  player,
});

export const handleRemovePlayer = id => ({
  type: REMOVE_PLAYER,
  id,
});

export function getRoster() {
  return (dispatch) => {
    const token = localStorage.getItem('jwtToken');
    return new Promise((resolve, reject) => {
      axios.get(`${baseURL}/players`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          dispatch(handleGetRoster(res.data.players));
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err.response.data.error.message));
          reject();
        });
    });
  };
}

export function addPlayer({first_name, last_name, rating, handedness}) {
  return (dispatch) => {
    const token = localStorage.getItem('jwtToken');
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: `${baseURL}/players`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          first_name,
          last_name,
          rating,
          handedness,
        },
      })
        .then((res) => {
          dispatch(handleAddPlayer(res.data.player));
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err.response.data.error.message));
          reject();
        });
    });
  };
}

export function deletePlayer(id) {
  return (dispatch) => {
    const token = localStorage.getItem('jwtToken');
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url: `${baseURL}/players/${id}`,
        params: { id: `${id}` },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          dispatch(handleRemovePlayer(id));
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err.response.data.error.message));
          reject();
        });
    });
  };
}
