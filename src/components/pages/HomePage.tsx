import { Box } from '@mui/material'
import React from 'react'
import HomeHeading from '../container/HomeHeading'
import HomeRecently from '../container/HomeRecently'

const HomePage = () => {
  return (
    <Box
      sx={{
        color: 'textBody.main'
      }}
    >
        <HomeHeading />

        <HomeRecently />
    </Box>
  )
}

export default HomePage