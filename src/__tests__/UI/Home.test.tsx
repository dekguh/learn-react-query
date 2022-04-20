import { ThemeProvider } from '@mui/material'
import { act, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import theme from '../../components/utils/theme'
import HomePage from '../../components/pages/HomePage'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

jest.mock('react-query', () => ({
    ...jest.requireActual('react-query'),
    useQuery: () => jest.fn().mockReturnValue({
        status: 'success',
        data: [
            {
                title: 'tes',
                date: '12'
            },
            {
                title: 'tes',
                date: '12'
            }
        ]
    })
}))

describe('Home Page Testing', () => {
    it('should home page have heading', () => {
        render(
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <HomePage />
            </ThemeProvider>
        </QueryClientProvider>)

        expect(screen.getByTestId('test-title-heading')).toBeInTheDocument()
        expect(screen.getByTestId('test-description-heading')).toBeInTheDocument()
    })

    it('should home page have date & button', () => {
        render(
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <HomePage />
            </ThemeProvider>
        </QueryClientProvider>)

        expect(screen.getByTestId('test-date-heading').textContent).toMatch(/^\d{2}\s{1}[a-zA-Z]+\s{1}[0-9]{4}\s{1}[-]\s{1}[0-9]{2}[.][0-9]{2}\s{1}[a-zA-Z]{2}$/gs)
        expect(screen.getByTestId('test-btn-modal-todo').textContent).toEqual('+ new to list')
    })

    it('should home page have Recent task', () => {
        render(
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <HomePage />
            </ThemeProvider>
        </QueryClientProvider>)

        expect(screen.getByTestId('test-title-recent').textContent).toMatch(/^Recent task \([0-9]\)$/gs)
    })

    it('should home page have 2 card to-do', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <HomePage />
                </ThemeProvider>
            </QueryClientProvider>
        )

        expect(screen.getByTestId('test-card-todo-1')).toBeInTheDocument()
        expect(screen.getByTestId('test-card-todo-2')).toBeInTheDocument()
    })
})