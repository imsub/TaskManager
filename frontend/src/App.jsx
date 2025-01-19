import './App.css'
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from '@mui/material/styles';
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <StyledEngineProvider injectFirst>
     <CssBaseline />
     {/* <div
        style={{
          backgroundImage: `url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp)`,
          backgroundSize: 'cover', // Adjusts the image to cover the entire div
          backgroundPosition: 'center', // Centers the image
          minHeight: '100vh', // Ensures the div covers the full viewport height
        }}> */}
      <Outlet/>
      {/* </div> */}
    </StyledEngineProvider>
    </>
  )
}

export default App
