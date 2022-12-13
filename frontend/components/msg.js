import { Box, Chip, Typography } from "@mui/material";
import { InsertDriveFileRounded } from '@mui/icons-material';

import { downloadFile } from "../utils/download";


export default function Msg({msg}){

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" gap={0.5}>
      {/* msg.text */}
      <Chip sx={{height:"100%"}} label={<Typography whiteSpace={"pre-line"} py={0.79} fontSize="0.8125rem">{msg.text}</Typography>} />
      {msg.files.map((file, i) => {
        let fileName = decodeURIComponent(file.split("%2F").at(-1));
        return <Chip key={i} icon={<InsertDriveFileRounded/>} label={fileName} onClick={() => downloadFile(file, fileName)} />
      })}
      
    </Box>
  )
}