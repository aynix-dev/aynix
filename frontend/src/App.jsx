import FormularioSolicitud from './FormularioSolicitud';
import ListaSolicitudes from './ListaSolicitudes';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
      <h1 className="text-6xl text-red-500">TEST TAILWIND</h1>
      <FormularioSolicitud />
      <ListaSolicitudes />
    </div>
  );
}

export default App;
