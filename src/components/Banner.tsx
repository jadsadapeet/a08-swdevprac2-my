'use client'
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Banner() {
  // 1. กำหนดชุดรูปภาพ 4 รูปตามที่โจทย์ระบุ
  const covers = [
    '/img/cover.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg',
    '/img/cover4.jpg'
  ];

  // 2. ใช้ useState เก็บ index ภาพปัจจุบัน เริ่มต้นที่ภาพแรก (index 0)
  const [index, setIndex] = useState(0);

  // 3. เรียกใช้งาน useRouter สำหรับ programmatic navigation
  const router = useRouter();

  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '350px', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        cursor: 'pointer'
      }}
      className="relative w-full h-[350px] flex items-center justify-center text-center overflow-hidden cursor-pointer"
      // คลิกที่ Banner แล้ววนลูปเปลี่ยนภาพถัดไป ครบแล้ววนกลับมาภาพแรก
      onClick={() => setIndex((index + 1) % covers.length)}
    >
      {/* รูปภาพ Banner สลับตาม State index */}
      <Image
        src={covers[index]}
        alt="Banner"
        fill
        priority
        style={{ objectFit: 'cover', zIndex: 0 }}
      />

      {/* แผ่นกรองแสงสีดำ */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.4)', 
          zIndex: 1 
        }} 
      />

      {/* กล่องข้อความกึ่งกลาง */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          color: 'white', 
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
        className="relative z-10 text-white flex flex-col items-center justify-center px-4"
      >
        <h1 
          style={{ fontSize: '2.5rem', fontWeight: 'bold', textTransform: 'capitalize' }}
          className="text-4xl font-bold"
        >
          where every event finds its venue
        </h1>
        <p 
          style={{ fontSize: '1.2rem', marginTop: '10px' }}
          className="text-lg mt-2"
        >
          บริการสถานที่จัดเลี้ยงครบวงจร สำหรับทุกโอกาสพิเศษของคุณ
        </p>
      </div>

      {/* ปุ่มมุมขวาล่าง นำทางไป route /venue */}
      <button 
        className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-3 m-6 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent transition"
        onClick={(e) => {
          e.stopPropagation(); // ป้องกันการเปลี่ยนภาพซ้ำซ้อน
          router.push('/venue'); // สั่ง navigate ไปที่ /venue
        }}
      >
        Select Venue
      </button>
    </div>
  );
}