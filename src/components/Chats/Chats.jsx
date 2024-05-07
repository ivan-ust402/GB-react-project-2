import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material"
import React, { useEffect, useState } from "react"

export const Chats = () => {
  const [chatList, setChatList] = useState([])

  useEffect(() => {
    setChatList([
      {
        id: 0,
        name: "Семья",
      },
      {
        id: 1,
        name: "Друзья",
      },
      {
        id: 2,
        name: "Коллеги",
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
      {chatList.map((chatItem) => {
        return (
          <ListItemButton
            key={chatItem.id}
          >
            <ListItemText
              key={chatItem.id}
              primary={chatItem.name}
              sx={{ textAlign: "start" }}
            ></ListItemText>
          </ListItemButton>
        )
      })}
    </List>
  )
}
