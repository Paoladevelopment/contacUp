import './App.css';
import { InstruccionesUso } from './components/InstruccionesUso/InstruccionesUso';
import { Uploader } from './components/Uploader/Uploader';

function App() {
  return (
    <>
      <div className='text-center'>
        <h1 className='text-2xl font-semibold sm:text-4xl lg:text-5xl'>
          <span className='text-indigo-500'>¡</span>Bienvenido a{' '}
          <span className='underline decoration-indigo-500'>ConctactUp</span>
          <span className='text-indigo-500'>!</span>
        </h1>
        <p className='mt-6 text-xl'>
          Visualiza los contactos que tengas almacenado en un archivo CSV.
          <br />
          Sigue los siguientes{' '}
          <span className='bg-indigo-500 px-2 py-1 mt-2 text-white inline-block transform  -rotate-3'>
            2 pasos.
          </span>
        </p>
      </div>
      <InstruccionesUso />
      <Uploader />
    </>
  );
}

export default App;
