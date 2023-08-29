import { usuarios } from '../../constants';
import { Contactos } from '../Contactos/Contactos';

export const InstruccionesUso = () => {
  return (
    <div className='w-4/5 mx-auto my-10 p-4 bg-hawkes-blue-400 rounded-lg shadow-lg shadow-inner-none flex flex-col gap-6 lg:flex-row lg:p-8 lg:gap-2'>
      <div className='basis-2/4'>
        <h3 className='text-xl text-hawkes-blue-800 font-medium flex items-center gap-2 md:text-2xl'>
          <span className='text-4xl text-hawkes-blue-900 font-bold'>1.</span>
          Carga tu archivo csv con este formato.
        </h3>
        <div className='w-full h-[15.625rem] mt-4 mx-auto bg-shark-500 rounded sm:h-[25rem] sm:w-4/5'>
          <div className='w-full h-1/10 bg-shark-400 opacity-25 flex justify-end items-center pr-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8 mr-2 text-shark-100'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M18 12H6' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8 mr-2 text-shark-100'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z'
              />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8 text-shark-100'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <div
            className='w-full h-9/10 p-4 text-shark-50 overflow-x-auto scrollbar-thin scrollbar-thumb-shark-50 
            scrollbar-track-shark-400 scrollbar-thumb-rounded-md
            scroll-smooth'
          >
            <p>
              Lauren,1483307157,kaseyschiller@nienow.io
              Ike,738322624,camdengerlach@dicki.com
              Joany,119711081,ambroseschaefer@kovacek.name
              Eliezer,1036743140,spencerschmidt@considine.name
              Archibald,974358376,florenciohuels@jacobson.name
              Tatyana,328773403,jamalreinger@glover.name
              Estell,74035861,gregoriofay@frami.com
              Jazmyne,348569917,albertstanton@gulgowski.net
              Wyatt,1295007269,velmajacobs@prohaska.info
              Caden,211466457,johnnyfranecki@paucek.org
              Zula,1016956992,alejandrinarunte@franecki.net
              Roxane,1458908140,lexiehaley@hilpert.org
              Erik,1276645819,daniellemmerich@jenkins.info
              Corbin,415025266,nestorstehr@skiles.com
              Alyson,901658025,kris@okeefe.net
              Syble,1256807777,alishaward@bashirian.net
              Elwin,2059605293,lino@funk.com
              Mable,1872066171,justynboehm@roberts.info
              Elvie,1866136720,santiagoschulist@schulist.com
              Shanny,1994757183,carol@labadie.com
              Leopoldo,922754560,bartonnienow@emmerich.net
              Elbert,1286171703,gussie@bayer.biz
              Santino,2083195745,vergie@beer.name
              Jessika,926868435,walker@kertzmann.org
              Adah,1493703433,lorena@ferry.biz
              Mervin,1574645694,giuseppe@conroy.com
              Annabell,1825216546,nellekunde@kreiger.com
              Lincoln,1629355179,ardith@mante.com
              Janis,1848527688,quentin@watsica.com
              Icie,1755467741,germaine@rutherford.biz
              Lionel,1059106160,kaitlyn@damore.net
              Delbert,2011206410,tess@konopelski.name
              Hanna,1034375028,robbinsatterfield@skiles.org
              Trent,2106336739,shanestreich@larkin.org
              Kaleigh,2061924990,pfannerstilldaniela@balistreri.net
            </p>
          </div>
        </div>
        <p className='text-center mt-4'>
          El número telefónico debe ser de 10 dígitos.
        </p>
      </div>
      <div className='basis-2/4'>
        <h3 className='text-xl text-hawkes-blue-800 font-medium flex items-center gap-2 md:text-2xl'>
          <span className='text-4xl text-hawkes-blue-900 font-bold'>2.</span>
          Procesa la información de tus contactos.
        </h3>
        <div className='flex justify-center'>
          <Contactos contactos={usuarios} />
        </div>
      </div>
    </div>
  );
};
