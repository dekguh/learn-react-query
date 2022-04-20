import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { AiOutlineClockCircle } from 'react-icons/ai'
import ButtonCustom from '../controls/ButtonCustom'
import { ICardTodo } from '../utils/types'

const CardTodo : React.FC<ICardTodo> = ({ date, title }) => {
  return (
    <Box
        sx={{
            background: '#FFFFFF',
            boxShadow: '0px 0px 29px rgba(211, 211, 211, 0.5)',
            borderRadius: '4px',
            padding: '15px'
        }}
    >
        {/* date wrap */}
        <Box
            sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    color: 'redPrimary.main',
                    flex: '0 1 auto',
                    pr: '6px'
                }}
            >
                <i>
                    <AiOutlineClockCircle />
                </i>
            </Box>

            <Typography
                sx={{
                    fontSize: '14px',
                    flex: '1 1 auto'
                }}
            >
                {date}
            </Typography>
        </Box>

        <Box
            sx={{
                margin: '6px 0 0 0'
            }}
        >
            <Typography
                sx={{
                    color: 'textHeading.main',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '1.3'
                }}
            >
                {title}
            </Typography>

            <ButtonCustom
                text='detail task'
                sx={{
                    width: '100%',
                    mt: '12px'
                }}
            />
        </Box>
    </Box>
  )
}

export default CardTodo