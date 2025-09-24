import bigLogo from '../../assets/logos/logoPotenciaTransparente.png'
import bg from '../../assets/images/background.png'
import logo from '../../assets/logos/logoPotencia.png'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Header dentro del hero */}
      <header className="relative z-30 py-6">
        <div className="container relative flex flex-col items-center gap-4 pt-12 sm:pt-14">
          <NavLink to="/" className="absolute left-0 top-0 inline-flex items-center sm:left-2 sm:top-1">
            <img src={logo} alt="Potencia" className="h-10 w-auto sm:h-12" />
          </NavLink>
          <nav
            className="mt-3 flex w-[90%] items-center justify-between rounded-full border border-white/40 bg-white/30 px-4 py-2 text-base shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25 sm:mt-4 sm:px-6"
          >
            <a href="#inicio" className="font-medium text-indigo-700">Inicio</a>
            <a href="#sobre-nosotros">Sobre Nosotros</a>
            <a href="#equipo">Nuestro equipo</a>
            <a href="#casos">Casos de Éxito</a>
            <a href="#servicios">Servicios</a>
            <a href="#clientes">Clientes</a>
            <a href="#publicaciones">Publicaciones</a>
            <a href="#contacto">Contáctanos</a>
          </nav>
        </div>
      </header>
      <img
        src={bigLogo}
        alt="Potencia marca"
        className="pointer-events-none absolute bottom-0 right-0 z-20 select-none opacity-70"
        style={{ height: '70%', maxHeight: 500 }}
      />
      <div className="container relative z-30 flex items-center justify-center min-h-[calc(90vh-200px)]">
        <div className="max-w-xl text-left text-white drop-shadow-md">
          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
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


