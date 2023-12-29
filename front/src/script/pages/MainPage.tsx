import { BicycleForm, BicyclesContainer, Footer, Header, Statistics } from '../components';

export const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <main className="main">
        <div className="container">
          <div className="main-page__container">
            <div className="main-page__bicycles">
              <BicyclesContainer />
            </div>
            <div className="main-page__aside">
              <BicycleForm />
              <div className="main-page__divider"></div>
              <Statistics />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
