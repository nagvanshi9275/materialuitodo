//import React from "react";

import React from "react";

import "./styles.css";

import {
  Typography,
  CssBaseline,
  AppBar,
  Button,
  Container,
  TextField,
  TableContainer,
  Paper,
  TableRow,
  TableHead,
  Table,
  TableCell,
  TableBody
} from "@material-ui/core";

import { motion, AnimatePresence } from "framer-motion";

import DeleteIcon from "@material-ui/icons/Delete";
import SendIcon from "@material-ui/icons/Send";

import useAutocomplete from "@mui/material/useAutocomplete";
import { DriveEtaOutlined } from "@material-ui/icons";

export default function Main() {
  const [array, setarray] = React.useState([]);

  const [text, settext] = React.useState();

  function change(e) {
    settext(e.target.value);
  }

  function Click() {
    // setarray([...array, text]);

    if (text !== "") {
      setarray([...array, text]);
    }

    settext("");
  }

  function BUG(index) {
    //console.log(index);
    const naveen = array.filter((_, pop) => pop !== index);

    setarray(naveen);
  }

  const render = array.map((pre, index) => (
    <motion.div
      className="japan"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 1 }}
      final={{ opacity: 2, y: 10 }}
    >
      <div className="side">
        <h3>
          {pre}
          <Button
            onClick={() => BUG(index)}
            className="delete"
            endIcon={<DeleteIcon />}
          ></Button>
        </h3>
      </div>
    </motion.div>
  ));

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Typography className="mui1" align="center" variant="h4">
          TO-DO
        </Typography>
      </AppBar>

      <main>
        <Container className="container">
          <TextField onChange={change} className="dhoni" value={text} />

          <Button
            onClick={Click}
            variant="contained"
            endIcon={<SendIcon />}
          ></Button>
        </Container>
      </main>

      <div className="astro">
        <AnimatePresence>{render}</AnimatePresence>
      </div>
    </div>
  );
}
