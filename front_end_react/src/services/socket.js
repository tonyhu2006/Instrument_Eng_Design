// frontend/src/services/socket.js
import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_WEBSOCKET_URL);

export default socket;