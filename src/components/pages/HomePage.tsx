import { Box } from '@mui/material'
import React, { useCallback, useState } from 'react'
import AddListTodo from '../container/AddListTodo'
import HomeHeading from '../container/HomeHeading'
import HomeRecently from '../container/HomeRecently'

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const setStatusModal = useCallback((status : boolean) => {
    setIsOpenModal(status)
  }, [])

  return (
    <Box
      sx={{
        color: 'textBody.main',
        position: 'relative'
      }}
    >
        <HomeHeading onClickOpen={() => setIsOpenModal(true)} />

        <HomeRecently />

        {isOpenModal && (<AddListTodo setIsOpen={setStatusModal}/>)}
    </Box>
  )
}

export default HomePage