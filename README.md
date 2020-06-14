# Bot Tony
Um cliente do WhatsApp que se conecta através do aplicativo de navegador da Web do WhatsApp.
Ele usa o Puppeteer para executar uma instância real do Whatsapp Web para evitar o bloqueio.

## Instalação

Para instalar as dependências do bot utilize `yarn`

## Exemplo de uso

```js
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    console.log('QR RECEBIDO', qr);
});

client.on('ready', () => {
    console.log('CLIENTE PRONTO!');
});

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});

client.initialize();
```

## Suportes

| Feature  | Status |
| ------------- | ------------- |
| Envio de mensagens  | ✅  |
| Recebimento de mensagens | ✅  |
| Envio de mídia (imagens/audio/documentos)  | ✅  |
| Envio de mídia (video)  | ✅ |
| Envio de stickers | _pending_ |
| Recebimento de mídia (imagens/audio/videos/documentos)  | ✅  |
| Envio de cartão de contato | _pending_ |
| Envio de localizaçào | ✅ |
| Recebimento de localização | ✅ | 
| Resposta de mensagens | ✅ |
| Entrar em grupos por convites  | ✅ |
| Pegar convite por grupo  | ✅ |
| Modificar informações do grupo (título, descrição)  | ✅  |
| Adicionar participantes no grupo  | ✅  |
| Kickar participante do grupo  | ✅  |
| Promover um participante no grupo | ✅ |
| Mencionar o usuãrio | ✅ |
| Mutar/desmutar conversa | ✅ |
| Pegar informações do contato | ✅ |
| Pegar a imagem do perfil do contato | ✅ |
| Setar o status da conversa | ✅ |

## Pacote

https://github.com/pedroslopez/whatsapp-web.js