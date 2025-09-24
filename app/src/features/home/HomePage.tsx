import bigLogo from '../../assets/logos/logoPotenciaTransparente.png'
import bg from '../../assets/images/background.png'
import logo from '../../assets/logos/logoPotencia.png'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <section
      className="relative min-h-[75vh] w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Header dentro del hero */}
      <header className="relative z-30 py-6">
        <div className="container relative flex flex-col items-center gap-4 pt-12 sm:pt-14">
          <NavLink to="/" className="absolute left-0 top-0 inline-flex items-center sm:left-2 sm:top-1">
            <img src={logo} alt="Potencia" className="h-7 w-auto sm:h-8" />
          </NavLink>
          <nav
            className="mt-3 flex max-w-full items-center gap-6 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/15 sm:mt-4 sm:px-6"
          >
            <a href="#inicio" className="font-medium text-indigo-700">Inicio</a>
            <a href="#equipo">Nuestro equipo</a>
            <a href="#casos">Casos de Éxito</a>
            <a href="#servicios">Servicios</a>
            <a href="#publicaciones">Publicaciones</a>
            <a href="#contacto">Contáctanos</a>
          </nav>
        </div>
      </header>
      <img
        src={bigLogo}
        alt="Potencia marca"
        className="pointer-events-none absolute right-0 top-1/2 z-20 -translate-y-1/2 select-none opacity-70"
        style={{ height: '70%', maxHeight: 520 }}
      />
      <div className="container relative z-30 grid place-items-center py-20">
        <div className="max-w-xl text-center text-white drop-shadow-md">
          <h1 className="text-3xl font-semibold sm:text-4xl">
            El crecimiento de las
            <br />
            ciudades es
            <br />
            <span className="font-extrabold">POTENCIA</span> infinita.
          </h1>
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/10 to-transparent" />
    </section>
  )
}


