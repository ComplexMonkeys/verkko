export const Nav = () => {
  return (
    <nav className="bg-neutral-900 p-2">
      <div className="flex items-center justify-between mx-auto max-w-screen-xl">
        <div>
          <p className="text-2xl font-bold text-white">verkko.dev</p>
        </div>
        <ul className="flex items-center space-x-4 mr-4 text-amber-500">
          <li>
            <a className="hover:brightness-75" href="https://github.com/ComplexMonkeys">GitHub</a>
          </li>
          <li>
            <a className="hover:brightness-75" href="https://media.verkko.dev">Media</a>
          </li>
          <li>
            <a className="hover:brightness-75" href="https://status.verkko.dev">Status</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
