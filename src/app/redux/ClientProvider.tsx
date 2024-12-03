"use client";

import { Provider } from 'react-redux';
import store from "./store"; // Adjust the import path as needed

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;















