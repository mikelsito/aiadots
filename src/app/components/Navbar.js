import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-between max-w-screen-lg m-auto text-xl">
        <ul className="flex flex-row items-center justify-left pt-2 pb-4 text-xl font-normal">
        <Link href="/" className="hover:drop-shadow-white-sm pl-2 pr-2">
            Home
        </Link>{" "}
        |{" "}
        {/* <Link href="/films" className="hover:drop-shadow-white-sm">
            Films
        </Link>{" "}
        |{" "} */}
        <Link href="/resources" className="hover:drop-shadow-white-sm pl-2 pr-2">
            Resources
        </Link>
        </ul>
    </div>
  );
};

export default Navbar;
