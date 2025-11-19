import { Link } from "wouter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen overflow-hidden flex [&_a]:text-blue-400">
      <aside className="w-64 h-full bg-gray-800 text-white">
        <h1>Horizon Modding Studio</h1>
        <Link href="/">Home</Link>
      </aside>

      <main className="flex-1 w-full h-full overflow-auto">{children}</main>
    </div>
  );
}
