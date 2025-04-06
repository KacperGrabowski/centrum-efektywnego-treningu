import Carousel from "../components/Carousel";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto py-20 mt-30 mb-30">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-30">
        <div className="rounded-full w-100 h-100 overflow-hidden shadow-xl"><img src="src/assets/photos/photo1.jpg" alt="Tomasz Stewarski" className="object-cover shadow-md scale-170 translate-x-3" /></div>
        <div>
          <h2 className="text-3xl font-bold mb-4">O mnie</h2>
          <p className="text-gray-700">
            Nazywam się Tomasz Stewarski i od lat pomagam ludziom w osiąganiu ich celów...
          </p>
        </div>

      </div>
      <div className="flex flex-col items-center gap-8 ">
        <h2 className="leading-tight text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2b0a0a] via-[#0b1a33] to-[#003c3c] flex items-center justify-center gap-6 drop-shadow-2xl relative">
          <span className="h-1 w-16 bg-gradient-to-r from-[#3d0d0d] to-[#0f2c55] rounded-full" />
          Certyfikaty
          <span className="h-1 w-16 bg-gradient-to-r from-[#0f2c55] to-[#005252] rounded-full" />
        </h2>
        <div className="w-full flex items-center">
          <Carousel />
        </div>
      </div>
    </section>
  );
}