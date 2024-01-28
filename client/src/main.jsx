import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './styles/index.css'
import './styles/projectStyles.css'

// apollo config
import { ApolloProvider } from '@apollo/client';
import client from "./config/apollo.js"

// react query setup
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const twentyFourHoursInMs = 1000 * 60 * 60 * 24
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
