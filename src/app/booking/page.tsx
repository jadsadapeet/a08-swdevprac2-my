'use client'

import DateReserve from '@/components/DateReserve'
import { Button } from '@mui/material'

export default function Booking() {
  return (
    <main className="p-8 text-center flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Venue Booking</h1>
      
      <form className="flex flex-col items-center space-y-6 w-full max-w-md">
        <DateReserve />
        <Button
          variant="contained"
          name="Book Venue"
          type="submit"
        >
          Book Venue
        </Button>
      </form>
    </main>
  );
}