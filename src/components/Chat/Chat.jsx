import React, { useEffect, useRef, useState } from "react"
import styles from "./Chat.module.scss"
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material"

export const Chat = () => {
  const [messageList, setMessageList] = useState([])
  const [message, setMessage] = useState({
    text: "",
    author: "",
  })
  const [focusOnInput, setFocusOnInput] = useState(true)
  const formEl = useRef(null)

  const ROBOT_MESSAGE =
    "Рад приветствовать на нашем ресурсе! Сейчас все людишки заняты, поэтому я поработаю немного за них, правда я умею очень мало. Я могу лишь присылать это сообщение каждый раз после вашего сообщения. Но что поделать такая у меня функция и роль. Скоро кто-нибудь из людишек освободиться и ответит вам! Наберитесь терпения!"
  useEffect(() => {
    setMessageList([
      {
        text: "Привет, мир",
        author: "Реакт программа",
      },
      {
        text: "Привет, программа",
        author: "Иван",
      },
      {
        text: "Как дела?",
        author: "Иван",
      },
      {
        text: "Error 404",
        author: "Реакт программа",
      },
      {
        text: "Ну что ж, с первым падением билда товарищи",
        author: "Иван",
      },
    ])
  }, [])
  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList.slice(-1)[0].author !== "Bot-bibot" &&
      messageList.slice(-1)[0].author !== "Иван"
    ) {
      sendRobotMessage()
    }
  }, [messageList])
  useEffect(() => {
    document.addEventListener("click", checkClick)
    return function cleanup() {
      document.removeEventListener("click", checkClick)
    }
  })
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messageList])

  function checkClick(e) {
    const currentClick = e.target
    const target = formEl.current
    if (target.contains(currentClick)) {
      if (focusOnInput !== true) {
        setFocusOnInput(true)
      }
    } else {
      if (focusOnInput !== false) {
        setFocusOnInput(false)
      }
    }
  }

  function sendRobotMessage() {
    setTimeout(
      () =>
        setMessageList((prev) => [
          ...prev,
          { author: "Bot-bibot", text: ROBOT_MESSAGE },
        ]),
      1500
    )
  }

  function sendMessage(e) {
    e.preventDefault()
    if (message.text.trim() !== "") {
      setMessageList((prev) => [...prev, message])
      setMessage({
        text: "",
        author: "",
      })
    }
  }
  return (
    <div className={styles["messages"]}>
      <Box
        ref={formEl}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={sendMessage}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: "20px",
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <TextField
          id="outside-basic"
          label="Enter your question"
          variant="outlined"
          color="secondary"
          autoFocus={focusOnInput}
          focused={focusOnInput}
          required
          value={message.text}
          sx={{
            width: "100%",
          }}
          onInput={(e) => {
            setMessage({
              author: "Ivan",
              text: `${e.target.value}`,
            })
          }}
        />
        <Button
          variant="outlined"
          size="large"
          sx={{
            height: "56px",
            boxSizing: "border-box",
          }}
          onClick={sendMessage}
        >
          Send Message
        </Button>
      </Box>
      <div style={stylesApp.chatList}>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            height: 310,
            overflow: "scroll",
            padding: '0px',
            borderRadius: '15px'
          }}
        >
          {messageList.map((message, index) => (
            <ListItem
              style={stylesApp.container}
              key={index}
              disableGutters
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  margin: 0,
                  padding: 0,
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {message.author}
              </Typography>
              <ListItemText
                primary={`${message.text}`}
                sx={{
                  textAlign: "left",
                  margin: 0,
                  padding: 0,
                  fontSize: "16px",
                  fontStyle: "italic",
                }}
              />
            </ListItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
      </div>
    </div>
  )
}

const stylesApp = {
  container: {
    // backgroundColor: 'blue',
  },
  chatList: {
    border: "1px solid purple",
    borderRadius: "15px",
    paddingTop: '10px',
    paddingBottom: '10px',
  }
}
