import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import Errors from '../../forms/errors'

const state = {
  entities: {},
  result: [],
  meta: {},
  tempImageIds: [],
  isCallingAPI: false,
  errors: new Errors()
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
