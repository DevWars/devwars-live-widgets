import io from 'socket.io-client';
import store from '../store';
import eventBus from './eventBus';

const socket = io(import.meta.env.VITE_DEVWARS_BOT_WIDGETS_URL, { transports: ['websocket'] });

socket.install = (Vue) => Vue.prototype.$socket = socket;

socket.on('connect', () => {
    console.log('WS Connected!');
    socket.emit('betting.state');
    socket.emit('voting.state');
});

socket.on('betting.state', (state) => {
    store.commit('betting/SET_STATE', state);
});

socket.on('betting.bet', (bet) => {
    eventBus.emit('betting.bet', bet);
});


socket.on('voting.state', (state) => {
    store.commit('voting/SET_STATE', state);
});

socket.on('voting.vote', (vote) => {
    eventBus.emit('voting.vote', vote);
});

export default socket;
