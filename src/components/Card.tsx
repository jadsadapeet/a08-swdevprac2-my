import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'

interface CardProps {
  venueName: string;
  imgSrc: string;
  onRatingChange?: (venue: string, rating: number) => void;
}

export default function Card({ venueName, imgSrc, onRatingChange }: CardProps) {
  return (
    <InteractiveCard>
      <div 
        style={{ width: '100%', overflow: 'hidden', paddingBottom: '16px' }}
        className="w-full overflow-hidden pb-4"
      >
        {/* ปรับความสูงรูปภาพเพิ่มขึ้นเป็น 250px เพื่อให้ภาพใหญ่เต็มตา */}
        <div 
          style={{ position: 'relative', width: '100%', height: '250px' }}
          className="relative w-full h-[250px]"
        >
          <Image
            src={imgSrc}
            alt={venueName}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            style={{ objectFit: 'cover' }}
            className="object-cover"
          />
        </div>

        <div style={{ padding: '16px 10px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>
            {venueName}
          </h3>
          
          <div 
            onClick={(e) => {
              e.stopPropagation(); // คงไว้เพื่อไม่ให้เด้งเปลี่ยนหน้า
            }}
            style={{ display: 'inline-block', marginTop: '10px' }}
          >
            <Rating
              id={`${venueName} Rating`}
              name={`${venueName} Rating`}
              data-testid={`${venueName} Rating`}
              defaultValue={0}
              onChange={(event, newValue) => {
                if (onRatingChange && newValue !== null) {
                  onRatingChange(venueName, newValue);
                }
              }}
            />
          </div>
        </div>
      </div>
    </InteractiveCard>
  )
}