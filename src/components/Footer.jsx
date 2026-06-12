export default function Footer() {
  return (
    <footer className="bg-enigys-navy text-white pt-24 pb-12 border-t border-white/5 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-white/10 pb-16">
        <div className="space-y-4">
          <span className="text-lg font-bold tracking-wider text-white">ENIGYS LIMITED</span>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            A multi-disciplinary EPC framework delivering asset management solutions to heavy industry, medical sectors, and utility operators nationwide.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-enigys-emerald mb-6">Compliance & Core Standards</h4>
          <ul className="space-y-3 text-sm text-gray-400 font-light">
            <li>EPRA Licensed Class A Energy Auditors</li>
            <li>NCA Registered Contractors</li>
            <li>HSEQ Framework (ISO 9001/14001 Alignments)</li>
            <li>NITA Certified Training Professionals</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-enigys-blue mb-6">Regional Footprint</h4>
          <ul className="space-y-3 text-sm text-gray-400 font-light">
            <li>Blessed House, Thika Road, Nairobi</li>
            <li>P.O. Box 24122-00100, Kenya</li>
            <li>Direct Line: +254 736 172 007</li>
            <li>Inbox: info@enigysltd.com</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
        <p>&copy; 2026 ENIGYS LIMITED. Technical Execution Engine.</p>
        <div className="flex space-x-6">
          <span>Kenya & East Africa Distribution</span>
        </div>
      </div>
    </footer>
  );
}