import { useMUIThemeContext, YinYangThemesMenu } from "@abhishekzambare/mui";
import {
  TextField,
  Autocomplete,
  Button,
  Stack,
  ThemeProvider,
  Typography,
  Card,
  ButtonGroup,
  Fab,
  Checkbox,
  Rating,
  FormControl,
  InputLabel,
  Select,
  Slider,
  MenuItem,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Avatar,
  Badge,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tooltip,
  IconButton,
  Box,
  Alert,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
  LinearProgress,
} from "@mui/material";
import RowBox from "./RowBox";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

function App() {
  const theme = useMUIThemeContext();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <ThemeProvider theme={theme.Theme_WebApp_Theme}>
      <>
        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Theme</Typography>]}
            endElement={[<YinYangThemesMenu />]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Autocomplete</Typography>]}
            endElement={[
              <Autocomplete
                disablePortal
                options={[
                  { label: "The Shawshank Redemption", year: 1994 },
                  { label: "The Godfather", year: 1972 },
                  { label: "The Godfather: Part II", year: 1974 },
                ]}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Movie" />
                )}
              />,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Button</Typography>]}
            endElement={[
              <>
                {" "}
                <Stack spacing={2} direction="row">
                  <Button variant="text">Text</Button>
                  <Button variant="contained">Contained</Button>
                  <Button variant="outlined">Outlined</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                  <Button color="secondary">Secondary</Button>
                  <Button variant="contained" color="success">
                    Success
                  </Button>
                  <Button variant="outlined" color="error">
                    Error
                  </Button>
                </Stack>
              </>,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Button Group</Typography>]}
            endElement={[
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>,
              <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>,
              <ButtonGroup variant="text" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Checkbox</Typography>]}
            endElement={[
              <Checkbox defaultChecked />,
              <Checkbox />,
              <Checkbox disabled />,
              <Checkbox disabled checked />,
              <Checkbox defaultChecked />,
              <Checkbox defaultChecked color="secondary" />,
              <Checkbox defaultChecked color="success" />,
              <Checkbox defaultChecked color="default" />,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[
              <Typography variant="h3">Action Buttton</Typography>,
            ]}
            endElement={[
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>,
              <Fab color="secondary" aria-label="edit">
                <EditIcon />
              </Fab>,
              <Fab variant="extended">
                <NavigationIcon sx={{ mr: 1 }} />
                Navigate
              </Fab>,
              <Fab disabled aria-label="like">
                <FavoriteIcon />
              </Fab>,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Radio Group</Typography>]}
            endElement={[
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup defaultValue="female" name="radio-buttons-group">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Rating</Typography>]}
            endElement={[
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Select</Typography>]}
            endElement={[
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  defaultValue={10}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>,
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>,
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>,
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Slider</Typography>]}
            endElement={[
              <Slider aria-label="Volume" />,
              <Slider disabled aria-label="Volume" />,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Switch</Typography>]}
            endElement={[
              <Switch defaultChecked />,
              <Switch />,
              <Switch disabled defaultChecked />,
              <Switch disabled />,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">TextField</Typography>]}
            endElement={[
              <TextField placeholder={"Enter Your Email"} />,
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />,
              <TextField id="filled-basic" label="Filled" variant="filled" />,
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Toggle Button</Typography>]}
            endElement={[
              <ToggleButtonGroup aria-label="text formatting">
                <ToggleButton value="bold" aria-label="bold">
                  <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                  <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                  <FormatUnderlinedIcon />
                </ToggleButton>
                <ToggleButton value="color" aria-label="color" disabled>
                  <FormatColorFillIcon />
                  <ArrowDropDownIcon />
                </ToggleButton>
              </ToggleButtonGroup>,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Avatar</Typography>]}
            endElement={[
              <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </Stack>,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Badge</Typography>]}
            endElement={[
              <Badge badgeContent={4} color="secondary">
                <MailIcon color="action" />
              </Badge>,
              <Badge badgeContent={4} color="success">
                <MailIcon color="action" />
              </Badge>,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Chip</Typography>]}
            endElement={[
              <Chip label="Chip Filled" />,
              <Chip label="Chip Outlined" variant="outlined" />,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">List</Typography>]}
            endElement={[
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                </ListItem>
              </List>,
            ]}
          ></RowBox>
        </Card>
        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Table</Typography>]}
            endElement={[
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Tooltip</Typography>]}
            endElement={[
              <Tooltip title="Delete">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <Box sx={{ width: "100%", maxWidth: 500 }}>
            <Typography variant="h1" gutterBottom>
              h1. Heading
            </Typography>
            <Typography variant="h2" gutterBottom>
              h2. Heading
            </Typography>
            <Typography variant="h3" gutterBottom>
              h3. Heading
            </Typography>
            <Typography variant="h4" gutterBottom>
              h4. Heading
            </Typography>
            <Typography variant="h5" gutterBottom>
              h5. Heading
            </Typography>
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="button" gutterBottom sx={{ display: "block" }}>
              button text
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              caption text
            </Typography>
            <Typography
              variant="overline"
              gutterBottom
              sx={{ display: "block" }}
            >
              overline text
            </Typography>
          </Box>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Alert</Typography>]}
            endElement={[
              <Alert severity="success">This is a success Alert.</Alert>,
              <Alert severity="info">This is an info Alert.</Alert>,
              <Alert severity="warning">This is a warning Alert.</Alert>,
              <Alert severity="error">This is an error Alert.</Alert>,
            ]}
          ></RowBox>
        </Card>
        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Dialog</Typography>]}
            endElement={[
              <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                  Open alert dialog
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  role="alertdialog"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Let Google help apps determine location. This means
                      sending anonymous location data to Google, even when no
                      apps are running.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                      Disagree
                    </Button>
                    <Button onClick={handleClose}>Agree</Button>
                  </DialogActions>
                </Dialog>
              </React.Fragment>,
            ]}
          ></RowBox>
        </Card>

        <Card sx={{ p: 3, m: 3 }}>
          <RowBox
            startElement={[<Typography variant="h3">Progress</Typography>]}
            endElement={[
              <CircularProgress aria-label="Loading…" />,
              <CircularProgress color="secondary" aria-label="Loading…" />,
              <CircularProgress color="success" aria-label="Loading…" />,
              <CircularProgress color="inherit" aria-label="Loading…" />,
              <LinearProgress aria-label="Loading…" />,
              <LinearProgress color="secondary" aria-label="Loading…" />,
              <LinearProgress color="success" aria-label="Loading…" />,
              <LinearProgress color="inherit" aria-label="Loading…" />,
            ]}
          ></RowBox>
        </Card>
      </>
    </ThemeProvider>
  );
}

export default App;
