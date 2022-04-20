import { Box, Typography } from '@mui/material'
import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation } from 'react-query'
import ButtonCustom from '../controls/ButtonCustom'
import InputCustom from '../controls/InputCustom'
import { IAddListTodo } from '../utils/types'

const AddListTodo : React.FC<IAddListTodo> = ({ setIsOpen = () => false }) => {
    const [dataCreate, setDataCreate] = useState<{[key: string]: any;}>({
        title: '',
        date: '',
        time: ''
    })

    const mutationTodo = useMutation((data : {[key: string] : any;}) => {
        return fetch('https://rental-motoran.herokuapp.com/todos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }, {
        onSuccess: async () => {
            setIsOpen(false)
        }
    })

    const handleChangeTitle = (e : ChangeEvent<HTMLInputElement>) => {
        setDataCreate({
            ...dataCreate,
            title: e.target.value
        })
    }

    const handleChangeDate = (e : ChangeEvent<HTMLInputElement>) => {
        setDataCreate({
            ...dataCreate,
            date: e.target.value
        })
    }

    const handleChangeTime = (e : ChangeEvent<HTMLInputElement>) => {
        setDataCreate({
            ...dataCreate,
            time: e.target.value
        })
    }

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
        >
            <Box
                sx={{
                    background: '#FFFFFF',
                    boxShadow: '0px 0px 29px rgba(211, 211, 211, 0.5)',
                    borderRadius: '4px',
                    padding: '15px 20px',
                    maxWidth: '340px',
                    width: '100%',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <Typography
                    sx={{
                        fontWeight: '600',
                        fontSize: '21px',
                        lineHeight: '32px',
                        color: '#424242',
                        marginBottom: '9px'
                    }}
                >
                    Create To-do
                </Typography>

                {/* title */}
                <InputCustom
                    placeholder='title'
                    sx={{
                        marginBottom: '9px',
                        width: '100%'
                    }}
                    type='text'
                    onChange={handleChangeTitle}
                    value={dataCreate.title}
                />

                {/* date */}
                <InputCustom
                    placeholder='date'
                    sx={{
                        marginBottom: '9px',
                        width: '100%'
                    }}
                    type='date'
                    onChange={handleChangeDate}
                    value={dataCreate.date}
                />

                {/* time */}
                <InputCustom
                    placeholder='time'
                    sx={{
                        marginBottom: '9px',
                        width: '100%'
                    }}
                    type='time'
                    onChange={handleChangeTime}
                    value={dataCreate.time}
                />

                <ButtonCustom
                    text='create to-do'
                    sx={{
                        width: '100%'
                    }}
                    onClick={() => mutationTodo.mutate({
                        title: dataCreate.title,
                        date: `${dataCreate.date} - ${dataCreate.time}`
                    })}
                />

                <Typography
                    sx={{
                        color: 'bluePrimary.main',
                        fontWeight: 500,
                        fontSize: '14px',
                        mt: '10px',
                        textDecoration: 'underline',
                        textAlign: 'center',
                        cursor: 'pointer'
                    }}
                    onClick={() => setIsOpen(false)}
                >
                    back to home
                </Typography>
            </Box>
        </Box>
    )
}

export default AddListTodo