import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MessageIcon from '@mui/icons-material/Message';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Contactform = () => {
    return (
        <div>
            <Container maxWidth="sm">
                <Stack
                    component="form"
                    sx={{
                        width: '100%',
                        padding: '25px'
                    }}
                    spacing={2}
                    noValidate
                    autoComplete="off"
                >
                    <h3><MessageIcon></MessageIcon> Contact</h3>
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <TextField id="outlined-number" label="Phone" type="number" variant="outlined" />
                    <TextField id="outlined-basic" label="email" variant="outlined" />
                    <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>
            </Container>
        </div>
    )
}

export default Contactform
