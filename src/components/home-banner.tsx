export function HomeBanner() {
  return (
    <div className="relative">
      <img src="/assets/home-banner.png" alt="home-banner" className="object-cover" />
      <div className="absolute bg-white rounded-br-lg rounded-tr-lg px-10 py-6 w-1/3 top-1/2 transform -translate-y-1/2">
        <h2 className="text-4xl font-bold font-montserrat-alternates text-[#20338B]">
          Capital Cervecera
        </h2>
        <p className="text-3xl font-montserrat-alternates text-[#20338B]">
          Valdivia en cada gota. Disfruta lo artesanal, consume local.
        </p>
      </div>
    </div>
  )
}