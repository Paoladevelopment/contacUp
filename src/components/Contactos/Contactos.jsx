import PropTypes from 'prop-types';
import { Contacto } from './Contacto/Contacto';
import { useState } from 'react';

export const Contactos = ({ contactos }) => {
  const [numPag, setNumPag] = useState(1);
  const contactosPorPag = 4;
  const totalPaginas = Math.ceil(contactos.length / contactosPorPag);
  const indexUltimoContacto = numPag * contactosPorPag;
  const indexPrimerContacto = indexUltimoContacto - contactosPorPag;

  const cambiarPagina = (numPag) => {
    setNumPag(numPag);
  };
  return (
    <div className='w-4/5 mx-auto flex flex-col items-center mt-4'>
      <div className='flex gap-2 text-hawkes-blue-800'>
        {numPag > 1 && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 cursor-pointer hover:text-white'
            onClick={() => cambiarPagina(numPag - 1)}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
            />
          </svg>
        )}
        <p>
          {numPag}/{totalPaginas}
        </p>
        {numPag >= 1 && numPag < totalPaginas && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 cursor-pointer hover:text-white'
            onClick={() => cambiarPagina(numPag + 1)}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
            />
          </svg>
        )}
      </div>
      <ul
        role='list'
        className='w-full p-6 mt-4 divide-y divide-slate-200 bg-white opacity-75 rounded-lg'
      >
        {contactos
          .slice(indexPrimerContacto, indexUltimoContacto)
          .map((contacto) => {
            return (
              <li
                key={contacto.email}
                className='flex flex-col py-4 first:pt-0 last:pb-0 overflow-y-auto sm:flex-row sm:gap-8 scrollbar-thin scrollbar-thumb-shark-400 
            scrollbar-track-shark-50 scrollbar-thumb-rounded-md
            scroll-smooth'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-12 h-12 self-center'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>

                <Contacto
                  nombre={contacto.name}
                  tel={contacto.phone}
                  email={contacto.email}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

Contactos.propTypes = {
  contactos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
