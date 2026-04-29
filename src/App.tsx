import { Analytics } from '@vercel/analytics/react';
import AppLayout from '@/components/layout/AppLayout';

const App = () => {
  return (
    <>
      <AppLayout />
      <Analytics />
    </>
  );
};

export default App;
