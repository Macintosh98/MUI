import "./App.css";
// import { MUI } from "@abhishekzambare/mui";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
function App() {
  return (
    <>
      {/* <MUI> */}
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      {/* </MUI> */}
    </>
  );
}

export default App;
