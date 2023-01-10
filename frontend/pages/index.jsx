/** @jsxImportSource @emotion/react */

import { Box, Container } from "@mui/material";
import { SectionTitle } from "../components/molecules/SectionTitle";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    // className={styles.container}
    <div>
      <Container>
        <Box>
          <SectionTitle
            title="What is QR Chat?" //QRチャット便とは
            body={
              "This service is useful for ad-hoc chatting and file sharing. No registration is required and anyone can use it for free. Chat is maintained for 24 hours after posting. \n\nWe aimed to create an application that allows you to chat quickly with a QR code, even if you haven't exchanged social networking services!"
              //              "その場限りのチャットやファイル共有に便利なサービスです。会員登録不要で、誰でも無料で使うことができます。投稿から24時間チャットが維持されます。\n\n SNS交換していない人でもQRコードでサクッとチャットできるアプリを目指しました！"
            }
            sxBox={{ mt: 8 }}
          />
          <Box width={176} mt={4} overflow="hidden"></Box>
        </Box>
      </Container>
    </div>
  );
}
