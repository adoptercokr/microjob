export default function Header({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-900">{title}</h1>
      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">M</div>
    </header>
  );
}
