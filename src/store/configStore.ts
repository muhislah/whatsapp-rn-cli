import { compose, legacy_createStore as createStore} from 'redux'
import rootReducer from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

export interface AppState {
  search: {
    searchPhrase: string;
    // other properties
  };
  messages: {
    markedId: string,
    data: any[]
  }
  // other slices of state
}

const configStore = () => {
  return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

export default configStore
