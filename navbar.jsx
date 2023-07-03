import React from 'react'
import {Button, Stack } from "@mui/material";
const Navbar = () => {
  return (
   
       <Stack direction={"row"}
        justifyContent={"center"}
         sx={{p:3}}  /* //p:2  --20px padding diymek */
         spacing={2}>
        <Button >Baş sahypa</Button>
        <Button>Habarlar</Button>
        <Button>MAslahatlar</Button>
        <Button>Geçirilýän çäreler</Button>
        
        
      </Stack>
    
  );
};

export default Navbar
