import RouterContainer from './src/router/routerContainer';
import configStore from './src/store/configStore'
import { Provider } from 'react-redux'
import { MenuProvider } from 'react-native-popup-menu';
import { StatusBar } from 'react-native';

const store = configStore()

export default function App() {
  return (
    <>
      <Provider
        store={store}
      >
        <MenuProvider>
          <RouterContainer />
        </MenuProvider>
      </Provider>
    </>
  );
}