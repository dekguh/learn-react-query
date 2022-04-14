import { Box } from '@mui/material'
import React from 'react'
import ButtonCustom from '../controls/ButtonCustom'
import ChipCustom from '../controls/ChipCustom'
import InputCustom from '../controls/InputCustom'

const HomePage = () => {
  return (
    <Box>
        <InputCustom placeholder='placeholder'/>
        <ButtonCustom text='submit todo'/>
    </Box>
  )
}

export default HomePage