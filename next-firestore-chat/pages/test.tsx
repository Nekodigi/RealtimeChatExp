import { Button, TextField } from "@mui/material"

export default function Chat() {
  return <div>
    <h1>Realtime Chat</h1>
    <TextField id="name-input" label="お名前" variant="outlined" /><br />
    <TextField id="name-input" label="テキストを入力" margin="normal"  multiline variant="outlined" /><br />
    <Button variant="contained" >送信</Button>
  </div>
}
