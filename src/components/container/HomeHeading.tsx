import { Box, Typography } from '@mui/material'
import React from 'react'
import ButtonCustom from '../controls/ButtonCustom'
import ChipCustom from '../controls/ChipCustom'

const HomeHeading = () => {
  return (
    <Box
        sx={{
            maxWidth: '910px',
            width: '100%',
            mx: 'auto',
            px: '15px',
            display: 'flex',
            flexFlow: {
                xs: 'column nowrap',
                md: 'row nowrap'
            },
            alignItems: {
                xs: 'flex-start',
                md: 'baseline'
            },
            py: '30px'
        }}
    >
        {/* title wrap */}
        <Box
            sx={{
                flex: '1 1 auto',
                paddingBottom: {
                    xs: '20px',
                    md: '0'
                }
            }}
        >
            {/* title */}
            <Typography
                component='h1'
                sx={{
                    fontWeight: '600',
                    fontSize: '38px',
                    color: 'textHeading.main',
                    mb: '8px'
                }}
                data-testid='test-title-heading'
            >
                Daily Task
            </Typography>

            {/* description */}
            <Typography
                component='p'
                sx={{
                    color: 'textBody.main',
                    fontSize: '14px',
                    lineHeight: '1.7',
                    maxWidth: '400px',
                    width: '100%'
                }}
                data-testid='test-description-heading'
            >
            Click <ChipCustom label='+ new'/> to create new To-do list, easy wait to management your task and time.
            </Typography>
        </Box>

        {/* action */}
        <Box
            sx={{
                flex: {
                    xs: '1 1 auto',
                    md: '0 1 auto'
                },
                maxWidth: '200px',
                width: '100%'
            }}
        >
            {/* date */}
            <Typography
                sx={{
                    textAlign: {
                        xs: 'left',
                        md: 'center'
                    },
                    fontSize: '14px',
                    mb: '8px'
                }}
                data-testid='test-date-heading'
            >
                17 April 2022 - 09.00 pm
            </Typography>

            {/* create button */}
            <ButtonCustom
                text='+ new to list'
                sx={{
                    width: '100%'
                }}
                dataTestId='test-btn-modal-todo'
            />
        </Box>
    </Box>
  )
}

export default HomeHeading