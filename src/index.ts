import { server } from './server/Server';

server.listen(process.env.PORT, () => {
    console.log(`servidor rodando na portaa ${process.env.PORT}!`);
});