// leitor de qr code
const qrcode = require('qrcode-terminal');
//const { use } = require('react');
const { Client, Buttons, List, MessageMedia, LocalAuth, AuthStrategy } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client({
    authStrategy: new LocalAuth()
});
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

const userState = {} //Armazena o estado do usuário

// Funil

client.on('message', async msg => {

    const from = msg.from;

    if (!userState[from]){
        userState[from] = "menuPrincipal" //Estado inicial
    }

    const chat = await msg.getChat();
    const contact = await msg.getContact(); //Pegando o contato
    const name = contact.pushname || contact.number; //Pegando o nome do contato ou telefone
    const primeiroNome = name.split(" ")[0];

    if (userState[from] === "menuPrincipal") {
        await delay(1000); //delay de 1 segundo
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000); //Delay de 1 segundo
        const mensagemMenu = `Olá! ${primeiroNome} Me chamo Caramelo! Sou o Assistente virtual do Animalizando.\n
Como posso ajudá-lo enquanto um humaninho não vem te atender? Por favor, digite uma das opções abaixo que já já iremos atendê-lo:\n\n
1 - Atendimento Veterinário\n
2 - Banho e Tosa\n
3 - Rações\n
4 - Medicamentos\n
5 - Outros assuntos`;
        //if (msg.body === "1")

        await client.sendMessage(from, mensagemMenu);
    
        
    }


});

//     if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
//         const chat = await msg.getChat();


//         await delay(3000); //delay de 3 segundos
//         await chat.sendStateTyping(); // Simulando Digitação
//         await delay(3000);
//         await client.sendMessage(msg.from, `Nosso atendimento veterinário funciona de:\n
// Segunda à sexta-feira das 09:00 as 17:00;\n
// Sábado das 09:00 até as 14:00.\n
// Atendimento por ordem de chegada!`);
//         await client.sendMessage(msg.from, `Além disso, gostaria de saber algo mais ?\n\n
// 1 - Valores (Consulta e Vacinas);\n\n
// Obs: Para voltar ao menu principal, escreva *menu*`);

        
//     if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
//         const chat = await msg.getChat();

//         await delay(3000); //delay de 3 segundos
//         await chat.sendStateTyping(); // Simulando Digitação
//         await delay(3000);
//         await client.sendMessage(msg.from, `Ótimo! Seguem os valores dos nossos principais serviços:\n\n
//             Consulta - R$ 50,00\n\n

//             -----Vacinas Caninas-----
//             V10 - R$ 100,00\n
//             V8 - R$ 70,00\n
//             Giardia - R$ 100,00\n
//             Gripe Oral - R$ 130,00\n
//             Raiva - R$ - 50,00\n\n

//             -----Vacinas Felinas-----
//             V5 - R$ 150,00\n
//             V4 - R$ 100,00\n
//             V3 - R$ 70,00\n
//             Raiva - R$ 50,00\n\n
            
//             Caso ainda tenha ficado alguma dúvida, não tem problema, é só escrever aqui *menu*, para voltar ao menu principal ou aguardar que já já um humano vem pra te ajudar!`);

//             }
              


//     }

//     if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
//         const chat = await msg.getChat();


//         await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
//         await chat.sendStateTyping(); // Simulando Digitação
//         await delay(3000);
//         await client.sendMessage(msg.from, 'no TOP Individual:* R$42,50 por mês, com benefícios adicionais como\n\n*Plano TOP Família:* R$79,90 por mês, inclui você mais 3 dependentes');

//         await delay(3000); //delay de 3 segundos
//         await chat.sendStateTyping(); // Simulando Digitação
//         await delay(3000);
//         await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');
//     }

//     if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
//         const chat = await msg.getChat();


//         await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
//         await chat.sendStateTyping(); // Simulando Digitação
//         await delay(3000);
//         await client.sendMessage(msg.from, 'Sorteio de em prêmios todo ano.\n\nAtendimento médico ilimitado 24h por dia.\n\nReceitas de medicamentos');
        
//         await delay(3000); //delay de 3 segundos
//         await chat.sendStateTyping(); // Simulando Digitação
//         await delay(3000);
//         await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');

//     }

//     if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
//         const chat = await msg.getChat();

//         await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
//         await chat.sendStateTyping(); // Simulando Digitação
//         await delay(3000);
//         await client.sendMessage(msg.from, 'Você pode aderir aos nossos planos diretamente pelo nosso site ou pelo WhatsApp.\n\nApós a adesão, você terá acesso imediato');


//         await delay(3000); //delay de 3 segundos
//         await chat.sendStateTyping(); // Simulando Digitação
//         await delay(3000);
//         await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');


//     }

//     if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
//         const chat = await msg.getChat();

//         await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
//         await chat.sendStateTyping(); // Simulando Digitação
//         await delay(3000);
//         await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou visite nosso site: https://site.com ');


//     }








// });