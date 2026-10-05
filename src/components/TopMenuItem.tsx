import Link from 'next/link';

interface TopMenuItemProps {
  title: string;
  pageRef: string;
}

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link
      href={pageRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '0 16px',
        color: '#4b5563',
        fontWeight: 'bold',
        textDecoration: 'none'
      }}
      className="w-32 h-full flex items-center justify-center text-center font-sans font-semibold text-gray-700 hover:text-black hover:bg-gray-100 transition duration-200"
    >
      {title}
    </Link>
  );
}