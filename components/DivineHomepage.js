export default function DivineHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-700 text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <img
          src="/logo.png"
          alt="Divine Home Health Agency Logo"
          className="mx-auto w-48 mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Care That Feels Divine
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
          Trusted home health care for medically fragile children and the families who love them.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#" className="bg-white text-black px-6 py-3 rounded text-lg font-semibold hover:bg-gray-300">
            Get Care
          </a>
          <a href="#" className="border border-white text-white px-6 py-3 rounded text-lg font-semibold hover:bg-white hover:text-black">
            Join Our Team
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-slate-800">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {['Private Duty Nursing', 'Pediatric Home Health', 'Respite Care', 'MCO Coordination'].map(
            (service) => (
              <div key={service} className="bg-slate-700 text-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-sm">
                  High-quality care provided by compassionate professionals dedicated to your child’s well-being.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Audience */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Who We Serve</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Nurses", "Families", "Hospitals", "Facilities"].map((group) => (
            <div
              key={group}
              className="bg-slate-600 p-4 rounded-xl text-center w-40"
            >
              <h4 className="text-xl font-semibold mb-2">{group}</h4>
              <p className="text-sm">
                Customized support tailored to each audience’s needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Experience Divine Care?</h2>
        <a href="#" className="bg-white text-black px-8 py-4 rounded text-lg font-semibold hover:bg-gray-300">
          Refer a Patient
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Divine Home Health Agency. All rights reserved.</p>
        <div className="mt-2">Privacy Policy | Terms of Service</div>
      </footer>
    </div>
  );
}