import { GetterTree } from 'vuex';
import { RootStateInterface } from './root_state_interface';

export const getters: GetterTree<RootStateInterface, RootStateInterface> = {
    getMessage(state) {
        return state.message;
    }
}