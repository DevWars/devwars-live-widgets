import { createStore } from 'vuex';
import betting from './betting';
import voting from './voting';

export default createStore({
    modules: { betting, voting },
});
