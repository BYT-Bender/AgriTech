import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { MainStack } from './components/MainStack';
import { AuthProvider } from './hooks/useAuth';
import { OrdersProvider } from './hooks/useOrders';

Object.defineProperty(global, '__DEV__', { value: false });

function App() {
  return (
    <AuthProvider>
      <OrdersProvider>
        <MainStack />
      </OrdersProvider>
    </AuthProvider>
  );
}

ReactNativeScript.start(React.createElement(App, {}, null));