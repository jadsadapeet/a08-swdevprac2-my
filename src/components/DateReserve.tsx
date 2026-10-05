'use client'

import React, { useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { Dayjs } from 'dayjs'

export default function DateReserve() {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null)
  const [venue, setVenue] = useState('Bloom')

  const handleVenueChange = (event: SelectChangeEvent) => {
    setVenue(event.target.value as string)
  }

  return (
    <div className="flex flex-col space-y-5 w-full max-w-md">
      <TextField
        variant="standard"
        name="Name-Lastname"
        label="Name-Lastname"
        fullWidth
      />

      <TextField
        variant="standard"
        name="Contact-Number"
        label="Contact-Number"
        fullWidth
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white"
          value={reserveDate}
          onChange={(newDate) => setReserveDate(newDate)}
        />
      </LocalizationProvider>

      <Select
        variant="standard"
        id="venue"
        value={venue}
        onChange={handleVenueChange}
        fullWidth
      >
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </Select>
    </div>
  )
}