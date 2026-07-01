export default function Header({ title }: { title: string }) {
  return (
    <header className="md:hidden sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 px-5 py-4 flex items-center justify-between shadow-sm">
      <h1 className="text-xl font-black text-gray-900 tracking-tight">{title}</h1>
      <div className="w-9 h-9 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-black shadow-sm">M</div>
    </header>
  );
}
