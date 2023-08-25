import PropTypes from 'prop-types';
export const Boton = ({ tipo, texto, onClick }) => {
  return (
    <button
      type={tipo}
      onClick={onClick}
      className='w-2/5 bg-violet-500 hover:bg-violet-400 text-white p-2 rounded-lg lg:w-1/5'
    >
      {texto}
    </button>
  );
};

Boton.propTypes = {
  tipo: PropTypes.string,
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
