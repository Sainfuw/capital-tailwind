import { SearchBar } from "./search-bar";

export function Header() {
  return (
    <header className="bg-[#E1E6FC] flex items-center gap-20 px-10 py-6 justify-between">
      <img src="assets/logo.svg" alt="logo" />
      <nav className="flex items-center gap-4 *:p-2 *:text-[#343A40] hover:*:underline hover:*:underline-offset-8">
        <a href="/" className="font-bold">Inicio</a>
        <a href="/">Cervezas</a>
        <a href="/">Packs</a>
        <a href="/">Suscripciones</a>
        <a href="/">Merch</a>
      </nav>
      <div className="flex items-center gap-12">
        <SearchBar />
        <div className="flex gap-4">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#20338B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#20338B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="#20338B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </header >
  )
}