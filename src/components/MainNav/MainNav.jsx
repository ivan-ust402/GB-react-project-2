import React, { useEffect, useState } from 'react';
import {
    List,
    ListItemButton,
    ListItemText,
    ListSubheader,
  } from "@mui/material"

  
  export const MainNav = () => {
    const [navList, setNavList] = useState([])
  
    useEffect(() => {
      setNavList([
        {
          id: 0,
          name: "Домашняя страница",
          path: '/'
        },
        {
          id: 1,
          name: "Профиль",
          path: '/profile'
        },
        {
          id: 2,
          name: "Чаты",
          path: '/chats'
        },
      ])
    }, [])
    return (
      <List
        sx={{
          width: "100%",
          maxWidth: 200,
          height: 'fit-content',
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          border: "1px solid purple",
          borderRadius: "15px",
          boxSizing: 'border-box'
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ textAlign: "start", borderRadius: '15px' }}
          >
            Мои чаты
          </ListSubheader>
        }
      >
        {navList.map((item) => {
          return (
            <ListItemButton
              key={item.id}
            >
              <ListItemText
                key={item.id}
                primary={item.name}
                sx={{ textAlign: "start" }}
              ></ListItemText>
            </ListItemButton>
          )
        })}
      </List>
    )
  }

export default MainNav;
