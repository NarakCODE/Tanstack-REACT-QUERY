import { Posts } from './Posts';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const client = new QueryClient();

function App() {
    return (
        // provide React Query client to App
        <QueryClientProvider client={client}>
            <div className='App'>
                <h1>Blog &apos;em Ipsum</h1>
                <Posts />
                <ReactQueryDevtools />
            </div>
        </QueryClientProvider>
    );
}

export default App;
