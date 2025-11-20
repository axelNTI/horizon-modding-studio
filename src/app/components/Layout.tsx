import Link from "@/app/components/Link";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen overflow-hidden [&_a]:text-blue-400 grid grid-cols-[auto_1fr] grid-rows-1">
      <aside className="w-64 h-full bg-gray-800 text-white flex flex-col">
        <h1 className="my-8 text-center">Horizon Modding Studio</h1>
        <div className="px-2">
          <Link
            text="Home"
            href="/"
            icon="Home"
          />
          <Link
            text="Settings"
            href="/settings"
            icon="Settings"
          />
        </div>
      </aside>

      <main className="w-full h-full overflow-auto">{children}</main>
    </div>
  );
};
