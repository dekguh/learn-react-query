import React from 'react'
import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'

const InputCustom = styled(TextField)(({ theme } : any) => ({
    '& .MuiInputBase-root': {
        color: '#808080',
        fontFamily: 'Poppins'
    },
    '& .MuiInputBase-input': {
        padding: '10px 20px',
    },
    '& fieldset': {
        borderColor: '#E6E6E6',
    }
}))

export default InputCustom