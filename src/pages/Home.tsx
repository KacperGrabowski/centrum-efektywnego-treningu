import photo1 from '../assets/photos/photo1.jpg';

export default function Home() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center">
      <div
        className="w-[70%] h-full absolute filter brightness-175 transition-all duration-500 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${photo1}), linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)`,
          backgroundPosition: 'center 30%',
        }}
      />
      <div className="bg-black/35 w-full h-full absolute top-0 left-0 z-0" 
      style={{
        backgroundImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.8) 100%))'
      }}/>
      <div className="relative z-10 text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Tomasz Stewarski</h1>
        <p className="text-xl md:text-2xl">Trener personalny • Dietetyk • Mentor</p>
      </div>
    </section>
  );
}