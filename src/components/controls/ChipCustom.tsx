import { Chip } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

const ChipCustom = styled(Chip)(({ theme } : any) => (
    {
        fontFamily: 'Poppins !important',
        backgroundColor: theme.palette.blueSecondary.main,
        fontSize: '14px',
        color: theme.palette.bluePrimary.main,
        borderRadius: '2px',
        '& span': {
            padding: '2px 6px'
        }
    }
))

export default ChipCustom