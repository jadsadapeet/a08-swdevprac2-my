import Image from 'next/image';

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = await params;

  // Mock ข้อมูลสถานที่จัดงานด้วย Map
  const mockVenueRepo = new Map();
  mockVenueRepo.set("001", { name: "The Bloom Pavilion", image: "/img/bloom.jpg" });
  mockVenueRepo.set("002", { name: "Spark Space", image: "/img/sparkspace.jpg" });
  mockVenueRepo.set("003", { name: "The Grand Table", image: "/img/grandtable.jpg" });

  const venue = mockVenueRepo.get(vid);

  return (
    <main className="text-center p-5">
      <h1 className="text-lg font-medium">Venue ID {vid}</h1>
      
      {venue && (
        /* จัดวางชิดซ้าย (justify-start) เพื่อให้รูปอยู่ซ้ายสุดตามสไลด์หน้า 18 และ 19 */
        <div 
          className="flex flex-row my-5 items-center justify-start text-left"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            margin: '20px',
            textAlign: 'left'
          }}
        >
          {/* รูปสถานที่จัดงาน (อยู่ชิดซ้าย กว้าง 30%) */}
          <div style={{ width: '30%', minWidth: '240px' }}>
            <Image 
              src={venue.image}
              alt="Product Picture"
              width={0} 
              height={0} 
              sizes="100vw"
              className="rounded-lg w-full h-auto bg-black"
              style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
            />
          </div>

          {/* ชื่อสถานที่จัดงาน (อยู่ถัดมาทางขวามือ) */}
          <div 
            className="text-md mx-5 font-medium" 
            style={{ marginLeft: '20px', fontSize: '1.25rem' }}
          >
            {venue.name}
          </div>
        </div>
      )}
    </main>
  );
}

export async function generateStaticParams() {
  return [{ vid: '001' }, { vid: '002' }, { vid: '003' }];
}