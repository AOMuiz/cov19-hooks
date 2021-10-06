import useFetch from "../Hooks/useFetch";
import Cases from "../components/Cases";
import CountryList from "./CountryList";

const Home = () => {
  const {
    data: newData,
    isPending,
    error,
  } = useFetch("https://disease.sh/v3/covid-19/all");

  console.log(newData);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <main>
        <div className="world">
          {newData && (
            <Cases
              active={newData.active}
              cases={newData.cases}
              newCases={newData.todayCases}
              recovered={newData.recovered}
            />
          )}
          <CountryList />
        </div>
      </main>
    </div>
  );
};

export default Home;
