import wppconnect from '@wppconnect-team/wppconnect'
import * as openai from './Openai.js';

wppconnect
  .create({
    session: 'sessionName',
    statusFind: (statusSession, session) => {
      // return: isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken
      console.log('Status Session: ', statusSession);
      // create session wss return "serverClose" case server for close
      console.log('Session name: ', session);
    },
  })
  .then((client) => start(client))
  .catch((error) => console.log(error));

  async function start(client) {
  // client.onMessage((message) => {
    // if (message.body === 'Hello') {
      const msg = await openai.getText("teste2")
      client
        .sendText('5521991986769@c.us', `${msg}`)
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    // }
  // });
}
// 000000000000@c.us
// 5521991986769@c.us -> Bia