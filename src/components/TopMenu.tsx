import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
  return (
    <nav
      style={{
        height: '56px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        paddingRight: '16px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%'
      }}
      className="h-14 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 flex flex-row-reverse items-center px-4"
    >
      {/* โลโก้ชิดขวาสุด */}
      <div 
        style={{ 
          position: 'relative', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '4px' 
        }}
        className="relative h-full w-28 p-1 flex items-center justify-center"
      >
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={110}
          height={40}
          style={{ objectFit: 'contain', maxHeight: '40px', width: 'auto' }}
        />
      </div>

      {/* เมนู Booking อยู่ทางซ้ายของโลโก้ */}
      <TopMenuItem title="Booking" pageRef="/booking" />
    </nav>
  );
}