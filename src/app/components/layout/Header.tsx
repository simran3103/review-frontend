import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between">
    <Link href={''} className="text-primary font-semibold text-2xl">ST PIZZA</Link>
    <nav className="flex items-center gap-8 text-gray-500 font-semibold">
      <Link href={''}>Home</Link>
      <Link href={''}>Menu</Link>
      <Link href={''}>About</Link>
      <Link href={'/faq'}>FAQs</Link>
    </nav>
  </header>
  );
};

export default Header;