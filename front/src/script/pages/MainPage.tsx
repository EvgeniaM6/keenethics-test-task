import { useGetAllBicyclesQuery } from '../redux/bicycleApi';
import { BicycleForm, BicyclesContainer, Footer, Header, Loading, Statistics } from '../components';
import { useEffect } from 'react';
import { showError } from '../utils';
import { useGetStatsQuery } from '../redux/statsApi';

export const MainPage = () => {
  const { data = [], isLoading, isError, error, refetch } = useGetAllBicyclesQuery('');
  const {
    data: stats,
    isLoading: isStatsLoading,
    isError: isStatsErr,
    error: statsErr,
    refetch: refetchStats,
  } = useGetStatsQuery('');

  const reloadBicycles = (): void => {
    refetch();
    refetchStats();
  };

  useEffect(() => {
    if (!isError || !error) return;
    showError(error);
  }, [isError, error]);

  useEffect(() => {
    if (!isStatsErr || !statsErr) return;
    showError(statsErr);
  }, [isStatsErr, statsErr]);

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
              <Statistics stats={stats} isLoading={isStatsLoading} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
