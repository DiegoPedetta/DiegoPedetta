import { createTheme  } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { indigo } from "@mui/material/colors";

 

const theme = createTheme({
    palette: {
        primary: {
            main: deepOrange[900]
        },
        secondary:{
            main:indigo[900]
        },
    }
})

export default theme;