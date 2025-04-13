
import Link from 'next/link';

export default function DivineHomepage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1580281658629-0b3c362e6c08?auto=format&fit=crop&w=1950&q=80)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <img
            src="/logo.png"
            alt="Divine Home Health Agency Logo"
            className="mx-auto w-40 mb-6"
          />
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-lg">
            Care That Feels Divine
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow">
            Compassionate pediatric home health care for medically fragile children.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/get-care"><a className="bg-white text-slate-900 px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-200">Get Care</a></Link>
            <Link href="/careers"><a className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-900">Join Our Team</a></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
