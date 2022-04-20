import { Box, Skeleton, Typography } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'
import CardTodo from '../card/CardTodo'
import { apiFetchTodo } from '../utils/fetch'

const LoadingSkeleton = () => {
    return(
        <>
            <Box
                sx={{
                    flex: '0 1 auto',
                    maxWidth: {
                        xs: '100%',
                        md: '283px'
                    },
                    width: '100%',
                    px: '15px',
                    pb: '30px'
                }}
            >
                <Skeleton
                    variant='text'
                    sx={{
                        width: '100%',
                        height: '16px',
                        mb: '4px'
                    }}
                    animation='wave'
                />

                <Skeleton
                    variant='text'
                    sx={{
                        width: '100%',
                        height: '22px',
                        mb: '4px'
                    }}
                    animation='wave'
                />

                <Skeleton
                    variant='rectangular'
                    sx={{
                        width: '100%',
                        height: '50px'
                    }}
                    animation='wave'
                />
            </Box>

            <Box
                sx={{
                    flex: '0 1 auto',
                    maxWidth: {
                        xs: '100%',
                        md: '283px'
                    },
                    width: '100%',
                    px: '15px',
                    pb: '30px'
                }}
            >
                <Skeleton
                    variant='text'
                    sx={{
                        width: '100%',
                        height: '16px',
                        mb: '4px'
                    }}
                    animation='wave'
                />

                <Skeleton
                    variant='text'
                    sx={{
                        width: '100%',
                        height: '22px',
                        mb: '4px'
                    }}
                    animation='wave'
                />

                <Skeleton
                    variant='rectangular'
                    sx={{
                        width: '100%',
                        height: '50px'
                    }}
                    animation='wave'
                />
            </Box>

            <Box
                sx={{
                    flex: '0 1 auto',
                    maxWidth: {
                        xs: '100%',
                        md: '283px'
                    },
                    width: '100%',
                    px: '15px',
                    pb: '30px'
                }}
            >
                <Skeleton
                    variant='text'
                    sx={{
                        width: '100%',
                        height: '16px',
                        mb: '4px'
                    }}
                    animation='wave'
                />

                <Skeleton
                    variant='text'
                    sx={{
                        width: '100%',
                        height: '22px',
                        mb: '4px'
                    }}
                    animation='wave'
                />

                <Skeleton
                    variant='rectangular'
                    sx={{
                        width: '100%',
                        height: '50px'
                    }}
                    animation='wave'
                />
            </Box>
        </>
    )
}

const HomeRecently = () => {
    const { status, data } = useQuery(['todosList'], apiFetchTodo)

    return (
        <Box
            sx={{
                maxWidth: '910px',
                width: '100%',
                mx: 'auto',
                py: '30px'
            }}
        >
            <Typography
                sx={{
                    fontSize: '21px',
                    color: 'textHeading.main',
                    fontWeight: '700',
                    mb: '30px',
                    px: '15px',
                    display: 'block'
                }}
                data-testid='test-title-recent'
            >
                Recent task ({data  ? data.length : '0'})
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                }}
            >
                {status === 'loading' && (
                    <LoadingSkeleton />
                )}

                {status === 'success' && data.length && data.sort((a : any, b : any) => b.id - a.id).map((data : any, i : number) => (
                    <Box
                        key={i}
                        sx={{
                            flex: '0 1 auto',
                            maxWidth: {
                                xs: '100%',
                                md: '283px'
                            },
                            width: '100%',
                            px: '15px',
                            pb: '30px'
                        }}
                    >
                        <CardTodo date={data.date} title={data.title} dataTestId={`test-card-todo-${i+1}`}/>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default React.memo(HomeRecently)