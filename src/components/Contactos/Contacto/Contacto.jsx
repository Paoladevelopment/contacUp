import PropTypes from 'prop-types';
export const Contacto = (props) => {
  const { nombre, tel, email } = props;
  return (
    <>
      <div className='grow grid sm:grid-cols-4 sm:grid-rows-2'>
        <div className='sm:col-span-2'>
          <p className='text-dark-blue-900'>Nombre:</p>
          <p>{nombre}</p>
        </div>
        <div className='sm:row-start-2 sm:col-span-full'>
          <p className='text-dark-blue-900'>Correo:</p>
          <p>{email}</p>
        </div>
        <div>
          <p className='text-dark-blue-900'>Tel:</p>
          <p>{tel}</p>
        </div>
      </div>
    </>
  );
};

Contacto.propTypes = {
  nombre: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
