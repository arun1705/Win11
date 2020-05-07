import React from "react";
import { Provider } from "react-redux";
import HomeNavigator from "./navigation/HomeNavigator";
import { NetworkProvider } from "./shared/offline/networkProvider";
import { store } from './store/store';

// const store = configStore();

export default function App() {
  return (
    <NetworkProvider>
      <Provider store={store}>
        <HomeNavigator />
      </Provider>
    </NetworkProvider>
  );
}
