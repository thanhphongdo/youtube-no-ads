import { ActionTree } from 'vuex';
import { RootStateInterface } from './root_state_interface';
import { BaseAxios } from '../utils/axios';
import { Utils } from '../utils';

const utils = new Utils();
const axios = new BaseAxios('http://localhost:3000/');

export const actions: ActionTree<RootStateInterface, RootStateInterface> = {
    changeMessage({ commit }, newMessage: string) {
        commit('changeMessage', newMessage);
    }
}