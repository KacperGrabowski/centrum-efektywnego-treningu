export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 mt-30 mb-30">
      <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
      <p className="text-gray-700 mb-4">Masz pytania? Napisz do mnie!</p>
      <a href="mailto:example@example.com" className="text-blue-600 hover:underline">
        example@example.com
      </a>

      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Imię" className="w-full border border-gray-300 rounded px-4 py-2" />
        <input type="email" placeholder="E-mail" className="w-full border border-gray-300 rounded px-4 py-2" />
        <textarea placeholder="Wiadomość" className="w-full border border-gray-300 rounded px-4 py-2 h-32"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Wyślij
        </button>
      </form>
    </section>


  );
}
