import MainNav from './components/main-nav';
import MoviesTable from './features/movies/movies-table';

export default function App() {
  return (
    <div>
      <MainNav />
      <div className="pl-40 pt-14">
        <MoviesTable />
      </div>
    </div>
  );
}
