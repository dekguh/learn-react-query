import { ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'
import React from 'react'
import theme from '../../components/utils/theme'
import HomePage from '../../components/pages/HomePage'

describe('Home Page Testing', () => {
    it('should home page have heading', () => {
        render(<ThemeProvider theme={theme}>
            <HomePage />
        </ThemeProvider>)

        expect(screen.getByTestId('test-title-heading')).toEqual('Daily Task')
        expect(screen.getByTestId('test-description-heading')).toEqual('Click + new to create new To-do list, easy wait to management your task and time.')
    })

    it('should home page have date & button', () => {
        render(<ThemeProvider theme={theme}>
            <HomePage />
        </ThemeProvider>)

        expect(screen.getByTestId('test-date-heading')).toMatch(/^\d{2}\s{1}[a-zA-Z]+\s{1}[0-9]{4}\s{1}[-]\s{1}[0-9]{2}[.][0-9]{2}\s{1}[a-zA-Z]{2}$/gs)
        expect(screen.getByTestId('test-btn-modal-todo')).toEqual('+ new to list')
    })

    it('should home page have Recent task', () => {
        render(<ThemeProvider theme={theme}>
            <HomePage />
        </ThemeProvider>)

        expect(screen.getByTestId('test-title-recent')).toMatch(/^Recent task \([0-9]\)$/gs)
    })
})