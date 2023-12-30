import { useGetAllBicyclesQuery } from '../redux/bicycleApi';
import { BicycleForm, BicyclesContainer, Footer, Header, Loading, Statistics } from '../components';

export const MainPage = () => {
  const { data = [], isLoading, refetch } = useGetAllBicyclesQuery('');

  const reloadBicycles = (): void => {
    refetch();
  };

  return (
    <div className="main-page">
      <Header />
      <main className="main">
        <div className="container">
          <div className="main-page__container">
            <div className="main-page__bicycles">
              <BicyclesContainer bicyclesArr={data} reloadBicycles={reloadBicycles} />
              {isLoading && <Loading />}
            </div>
            <div className="main-page__aside">
              <BicycleForm reloadBicycles={reloadBicycles} />
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
