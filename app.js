require('dotenv').config();

const tmi = require('tmi.js');

const client = new tmi.Client({
    options: { debug: true, messagesLogLevel: "info" },
    connection: {
        reconnect: true,
        secure: true
    },

    identity: {
        username: `${process.env.TWITCH_USERNAME}`,
        password: `oauth:${process.env.TWITCH_OAUTH}`
    },

    channels: [`${process.env.TWITCH_CHANNEL}`]
});

client.connect().catch(console.error);

// When the bot is on, it shall fetch the messages send by user from the specified channel
client.on('message', (channel, tags, message, self) => {
    
    // Lack of this statement or it's inverse (!self) will make it in active
    if (self) return;

    switch (message.toLowerCase()) {

        case 'Hi':
            client.say(channel, `Hello ${tags.username}`);
            break;
        
        case 'fr':
            client.say(channel, `fr`);
            break;   

        case 'naber':
            client.say(channel, `naber`);
            break;  

        case 'serdar5Pog':
            client.say(channel, `serdar5Pog`);
            break;      

        case 'sv2':
        let str = "I hate Hidden players";
        for (let i = 0; i <= str.length; i++) {
            client.say(channel, str.substring(0,i));
        }
        for (let j = str.length; j >= 0; j--) {
           client.say(channel, str.substring(j,0));
        }
        break;
    
        case '!.sv31':
            client.say(channel, `
            
            ⣿⣿⠏⣠⣾⣦⡐⢌⢿⣷⣦⣅⡑⠕⠡⠐⢿⠿⣛⠟⠛⠛⠛⠛⠡⢷⡈⢂⢕⢂
            ⠟⣡⣾⣿⣿⣿⣿⣦⣑⠝⢿⣿⣿⣿⣿⣿⡵⢁⣤⣶⣶⣿⢿⢿⢿⡟⢻⣤⢑⢂
            ⣾⣿⣿⡿⢟⣛⣻⣿⣿⣿⣦⣬⣙⣻⣿⣿⣷⣿⣿⢟⢝⢕⢕⢕⢕⢽⣿⣿⣷⣔
            ⣿⣿⠵⠚⠉⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⢕⢕⢕⢕⢕⣽⣿⣿⣿⣿
            ⢷⣂⣠⣴⣾⡿⡿⡻⡻⣿⣿⣴⣿⣿⣿⣿⣿⣿⣷⣵⣵⣵⣷⣿⣿⣿⣿⣿⣿⡿
            ⢌⠻⣿⡿⡫⡪⡪⡪⡪⣺⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
            ⠣⡁⠹⡪⡪⡪⡪⣪⣾⣿⣿⣿⣿⠋⠐⢉⢍⢄⢌⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈
            ⡣⡘⢄⠙⣾⣾⣾⣿⣿⣿⣿⣿⣿⡀⢐⢕⢕⢕⢕⢕⡘⣿⣿⣿⣿⣿⣿⠏⠠⠈
            ⠌⢊⢂⢣⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢐⢕⢕⢕⢕⢕⢅⣿⣿⣿⣿⡿⢋⢜⠠⠈
            ⠄⠁⠕⢝⡢⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣕⣑⣑⣑⣵⣿⣿⣿⡿⢋⢔⢕⣿⠠⠈
        
            `);
            break;
            
        case '!.sv32':
            client.say(channel, `

            ⣿⡇⣿⣿⣿⠛⠁⣴⣿⡿⠿⠧⠹⠿⠘⣿⣿⣿⡇⢸⡻⣿⣿⣿⣿⣿⣿⣿
            ⢹⡇⣿⣿⣿⠄⣞⣯⣷⣾⣿⣿⣧⡹⡆⡀⠉⢹⡌⠐⢿⣿⣿⣿⡞⣿⣿⣿
            ⣾⡇⣿⣿⡇⣾⣿⣿⣿⣿⣿⣿⣿⣿⣄⢻⣦⡀⠁⢸⡌⠻⣿⣿⣿⡽⣿⣿
            ⡇⣿⠹⣿⡇⡟⠛⣉⠁⠉⠉⠻⡿⣿⣿⣿⣿⣿⣦⣄⡉⠂⠈⠙⢿⣿⣝⣿
            ⠤⢿⡄⠹⣧⣷⣸⡇⠄⠄⠲⢰⣌⣾⣿⣿⣿⣿⣿⣿⣶⣤⣤⡀⠄⠈⠻⢮
            ⠄⢸⣧⠄⢘⢻⣿⡇⢀⣀⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠄⢀
            ⠄⠈⣿⡆⢸⣿⣿⣿⣬⣭⣴⣿⣿⣿⣿⣿⣿⣿⣯⠝⠛⠛⠙⢿⡿⠃⠄⢸
            ⠄⠄⢿⣿⡀⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⡾⠁⢠⡇⢀
            ⠄⠄⢸⣿⡇⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣫⣻⡟⢀⠄⣿⣷⣾
            ⠄⠄⢸⣿⡇⠄⠈⠙⠿⣿⣿⣿⣮⣿⣿⣿⣿⣿⣿⣿⣿⡿⢠⠊⢀⡇⣿⣿
            ⠒⠤⠄⣿⡇⢀⡲⠄⠄⠈⠙⠻⢿⣿⣿⠿⠿⠟⠛⠋⠁⣰⠇⠄⢸⣿⣿⣿           
        
            `);
            break;

            case '!.sv33':
            client.say(channel, `
            
            ⣿⣿⣿⣿⢡⣿⢇⠄⢨⣶⣿⣿⣿⣿⣿⣿⣷⣶⣭⣟⡿⠁⣸⣿⣿⣿⣿⣧⢣⢧ ⣿⣿⣿⡏⣿⢣⠾⣤⠞⣡⣶⣶⣶⣶⣬⣭⣽⣛⠻⣿⡇⠄⡛⢿⣿⣿⣿⣿⡞⣎ ⠸⣿⣿⣸⣁⣵⣿⣶⠎⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⢱⡼⢼⣧⡹⣿⣿⣿⡇⣿ ⠄⣩⣵⣿⣿⢹⣿⢃⢳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢳⣿⣧⣝⢻⡝⣿⣿⡇⣿ ⣾⡻⡃⣿⣿⠸⢣⣾⢸⡸⣿⣿⢹⣿⣿⣿⠘⣿⣿⣿⢈⣿⢸⣿⣷⣭⣿⣿⡇⣿ ⠃⣾⠃⣿⡏⢇⣮⣟⠸⡇⣿⣿⢸⠿⣿⣿⣤⢿⣿⣿⢸⢹⡆⡟⣸⣿⡟⣿⡇⣿ ⢰⣿⠄⣿⡇⡜⠛⠛⠿⢤⢹⣿⣼⢀⣿⡏⠿⠄⣿⠟⣰⣦⢧⢱⣿⣿⠳⣿⠃⣿ ⡜⣿⡆⣿⡇⣿⣿⣷⣶⣾⣦⣄⣧⣸⡸⢧⣿⡨⠩⠦⠿⠿⡼⢸⣿⡿⣄⢈⡆⢸ ⠹⣿⡇⣿⡇⣿⣿⣿⣿⣿⣿⣿⢻⣿⣿⣿⣶⣶⣶⣶⣶⣶⡆⣿⣿⢇⡟⣼⡧⣫ ⠄⢹⡇⣿⡇⣿⣿⣿⣿⣿⣿⣧⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⢘⣾⣿⢷⠋ ⠄⠈⡇⣿⡇⣹⣿⣿⣿⣿⣿⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢣⣿⡟⣾⣿⣿⠄⠄ ⠄⠄⢠⣿⡇⣷⠘⢿⣿⣧⡲⣾⣭⣭⣿⣒⠊⣹⣿⣿⡿⠁⣸⣿⡇⣿⣿⡏⡇⠄ ⠄⠄⠄⣿⡇⣿⠄⠄⠙⢿⣿⣷⣶⣶⣶⣾⣿⣿⠟⠋⠄⠄⣿⣿⢳⣿⣿⢹⡇⠄ ⠄⠄⠄⠘⣿⢸⢰⣆⠄⠄⠙⠻⣿⡿⠟⠛⠉⠄⠄⠄⠄⠄⣿⡟⣼⣿⢏⣿⢧⣷
        
            `);
            break;


            case '!.sv34':
            client.say(channel, `
            ⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄ ⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄ ⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄ ⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄ ⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰ ⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤ ⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗ ⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄ ⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄ ⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄ ⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄ ⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄ ⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴ ⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿            
            `);
            break;
    }

});