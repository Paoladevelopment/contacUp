import PropTypes from 'prop-types';
import Papa from 'papaparse';
import { useState } from 'react';
import { Boton } from '../Boton/Boton';
import { Input } from '../Input/Input';
import { useEffect } from 'react';
import { obtenerInfo, subirInfo } from '../../services';
import { formatoNumero } from '../../helpers/formatoNumero';
import { validarEmail, validarTel } from '../../helpers/validaciones';

export const Uploader = ({ establecerDatos, setUploading }) => {
  const [colorSoltarArchivo, setColorSoltarArchivo] = useState('bg-white');
  const [textoSoltarArchivo, setTextoSoltarArchivo] = useState(
    'Arrastra aquí tu archivo'
  );
  const [archivo, setArchivo] = useState([]);
  const filtrarDatos = (datos) => {
    return datos
      .map((fila) => {
        if (fila.length === 3) {
          if (!validarEmail(fila[2]) || !validarTel(fila[1])) return null;
          return fila;
        } else {
          return null;
        }
      })
      .filter((fila) => fila !== null);
  };
  const enviarDatos = async (resultados) => {
    const datosASubir = filtrarDatos(resultados.data);
    if (datosASubir.length === 0)
      return alert(
        'Asegúrate de que el archivo CSV que cargues siga el formato indicado al inicio.'
      );
    setUploading(true);
    for (let fila of datosASubir) {
      const conctacto = {
        name: fila[0],
        phone: formatoNumero(fila[1]),
        email: fila[2],
      };
      const respuesta = await subirInfo(conctacto);
      console.log(respuesta);
    }
    setUploading(false);
    const datosSubidos = await obtenerInfo();
    establecerDatos(datosSubidos);
  };
  const procesarArchivo = (archivo) => {
    Papa.parse(archivo, {
      header: false,
      complete: (resultados) => {
        enviarDatos(resultados);
      },
    });
  };

  //función destinada para cambiar el formato tanto al texto que se encuntra en el area para arrastrar archivos, como el color de esta.
  const darFormato = (texto = undefined, color = undefined) => {
    if (typeof texto === 'undefined' && typeof color === 'undefined')
      return 'Pasa ambos parametros o al menos uno';

    if (typeof texto === 'undefined') {
      setColorSoltarArchivo(color);
    } else if (typeof color === 'undefined') {
      setTextoSoltarArchivo(texto);
    } else {
      setColorSoltarArchivo(color);
      setTextoSoltarArchivo(texto);
    }
  };

  const validarFormatoArchivo = (archivo) => {
    const extensionArchivo = archivo.name.split('.').pop();
    const extensionesValidas = ['csv', 'txt'];
    if (!extensionesValidas.includes(extensionArchivo)) {
      setArchivo([]);
      alert('No es un archivo válido.\nFormato válido: csv o texto plano');
    } else {
      darFormato(archivo.name);
      procesarArchivo(archivo);
    }
  };

  const handleUpload = () => {
    document.querySelector('.input-file').click();
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
    darFormato('Suelta para procesar tu archivo', 'bg-hawkes-blue-400');
  };

  const handleOnDragLeave = (e) => {
    e.preventDefault();
    archivo.length === 0
      ? darFormato('Arrastra aquí tu archivo', 'bg-white')
      : darFormato(archivo[0].name, 'bg-white');
  };
  const handleDrop = (e) => {
    e.preventDefault();
    darFormato('Arrastra aquí tu archivo', 'bg-white');
    const archivos = e.dataTransfer.files;
    if (archivos.length === 1) {
      setArchivo(archivos);
    } else {
      alert('Solo se admite la subida de un archivo.');
      if (archivo.length !== 0) darFormato(archivo[0].name);
    }
  };

  useEffect(() => {
    if (archivo.length !== 0) {
      validarFormatoArchivo(archivo[0]);
    }
  }, [archivo]);

  return (
    <form className='w-1/2 h-[12.5rem] text-hawkes-blue-800 border-2 border-indigo-300 rounded border-dashed flex flex-col items-center justify-center gap-2'>
      <div className='text-center'>
        <p
          className='text-lg 
      font-bold lg:text-2xl'
        >
          Carga tu archivo
        </p>
        <p className='text-base lg:text-lg'>Solo archivo CSV</p>
      </div>
      <div
        className={`w-4/5 p-4 ${colorSoltarArchivo} rounded-lg flex gap-2 items-center justify-center`}
        onDragOver={handleOnDragOver}
        onDragLeave={handleOnDragLeave}
        onDrop={handleDrop}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15'
          />
        </svg>

        <p>{textoSoltarArchivo}</p>
      </div>
      <Input
        type='file'
        text='Selecciona un archivo'
        accept='.csv, .txt'
        multiple={false}
        onChange={(e) => {
          setArchivo(e.target.files);
        }}
      />
      <Boton tipo='button' texto='O elige' onClick={handleUpload} />
    </form>
  );
};

Uploader.propTypes = {
  establecerDatos: PropTypes.func,
  setUploading: PropTypes.func,
};
