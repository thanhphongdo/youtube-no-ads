import { MutationTree } from 'vuex';
import { ProjectItemInterface } from '../interfaces/project-interface';
import { ScenarioInterface } from '../interfaces/scenario-interface';
import { RootStateInterface } from './root_state_interface';

export const mutations: MutationTree<RootStateInterface> = {
    changeMessage(state, newMessage: string) {
        state.message = newMessage;
    }
}