import { BicycleForm, BicyclesContainer, Footer, Header, Statistics } from '../components';

export const MainPage = () => {
  return (
    <div>
      <Header />
      <BicyclesContainer />
      <div>
        <BicycleForm />
        <Statistics />
      </div>
      <Footer />
    </div>
  );
};
