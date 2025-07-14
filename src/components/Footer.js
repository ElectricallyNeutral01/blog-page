export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto text-center text-gray-400">
        <p>© {new Date().getFullYear()} Top10Tech. All rights reserved.</p>
        <p className="mt-2 text-sm">Affiliate Disclosure: We may earn commissions from purchases made through links on this site.</p>
      </div>
    </footer>
  );
}