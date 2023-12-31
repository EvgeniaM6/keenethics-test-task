import { useGetAllBicyclesQuery } from '../redux/bicycleApi';
import { BicycleForm, BicyclesContainer, Footer, Header, Loading, Statistics } from '../components';
import { useEffect } from 'react';
import { showError } from '../utils';

export const MainPage = () => {
  const { data = [], isLoading, isError, error, refetch } = useGetAllBicyclesQuery('');

  const reloadBicycles = (): void => {
    refetch();
  };

  useEffect(() => {
    if (!isError || !error) return;
    showError(error);
  }, [isError, error]);

  return (
    <div className="main-page">
      <Header />
      <main className="main">
        <div className="container">
          <div className="main-page__container">
            <div className="main-page__bicycles">
              {data.length ? (
                <BicyclesContainer bicyclesArr={data} reloadBicycles={reloadBicycles} />
              ) : (
                <p className="main-page__empty">No data</p>
              )}
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
