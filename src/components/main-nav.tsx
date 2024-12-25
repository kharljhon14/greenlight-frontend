import { House, LeafyGreen, LogIn, Popcorn, Settings, User } from 'lucide-react';

export default function MainNav() {
  return (
    <header className="bg-black text-white w-24 px-4 py-8 absolute left-5 bottom-10 top-10 rounded-2xl shadow-lg">
      <div className="flex flex-col items-center  justify-between h-full">
        <div>
          <a
            className="text-lg"
            href=""
          >
            <LeafyGreen size={36} />
          </a>
        </div>
        <nav className="flex flex-col gap-16">
          <a href="">
            <House />
          </a>
          <a href="">
            <Popcorn />
          </a>

          <a href="">
            <User />
          </a>

          <a href="">
            <Settings />
          </a>
        </nav>
        <div>
          <button>
            <LogIn />
          </button>
        </div>
      </div>
    </header>
  );
}
