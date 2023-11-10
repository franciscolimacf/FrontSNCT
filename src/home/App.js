import Navbar from '../Componentes/navbar';
import Footer2 from '../Componentes/footer2';
import Header1 from '../Componentes/Header1';

function App() {
  const [pageTitle, setPageTitle] = useState('Votação Festival');
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  const handleTitleChange = (event) => {
    setPageTitle(event.target.value);
  };
  return (
    <div>
      <h1>Votação Festival</h1>
      <input
        type="text"
        value={pageTitle}
        onChange={handleTitleChange}
        placeholder="Votação Festival"
      />
    </div>
  );
}
export default App;
