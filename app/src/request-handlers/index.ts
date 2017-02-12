import * as smsHandler from './sms-handler';
import * as Hapi from 'hapi';

export const indexHandler = (request: Hapi.Request, reply: Hapi.IReply) => {
    console.log('Get Request');
    console.log(request);
    reply(`Yep it's a server`);
};

export { smsHandler } from './sms-handler';