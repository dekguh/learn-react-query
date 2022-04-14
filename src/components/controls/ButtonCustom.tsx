import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { IButtonCustom } from '../utils/types'

const StyledButton = styled(Button)(({ theme } : any) => ({
    backgroundColor: theme.palette.blueSecondary.main,
    padding: '10px 25px',
    textTransform: 'lowercase',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: 0,
    boxShadow: 'none',
    borderRadius: '4px',
    '&:hover': {
        backgroundColor: theme.palette.bluePrimary.main,
        color: '#FFF'
    }
}))

const ButtonCustom : React.FC<IButtonCustom> = ({ text, sx, dataTestId }) => {
  return (
    <StyledButton sx={sx} data-testid={dataTestId}>
        {text}
    </StyledButton>
  )
}

export default ButtonCustom