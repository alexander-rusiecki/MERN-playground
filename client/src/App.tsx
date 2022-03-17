import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Navbar } from 'components/Navbar';
import { Home } from 'components/Home';
import { DogList } from 'components/DogList';
import { AddDog } from 'components/AddDog';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dogs" element={<DogList />} />
            <Route path="add-dog" element={<AddDog />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};
