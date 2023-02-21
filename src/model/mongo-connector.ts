import mongoose from 'mongoose';
import { config } from '../config';

const mongoDB: any = config.mongoDB;
const connectionString = `mongodb://${mongoDB.host}:${mongoDB.port}/${mongoDB.dbName}`;

class ConnectMongoose {
    public async connection() {
        await mongoose
            .connect(connectionString,{ authSource: 'admin', user: mongoDB.user,
                pass: mongoDB.pass})
            .then(() => {
                console.log('*** Mongoose Server Connection Success ***');
            })
            .catch((err) => {
                console.error('!!! Mongoose Server Connection catch Failed !!! %j', err);
                setTimeout(() => this.connection(), 10000);
            });
    }
}
export const connectMongoose: ConnectMongoose = new ConnectMongoose();

/* DB Status */
const dbConnection = mongoose.connection;
dbConnection.on('error', function (err) {
    console.error('!!!@@@ Mongoose Server Connection on ERROR @@@!!! %j ', err);
});
dbConnection.once('open', function callback() {
    console.log('@@@ Mongoose Server Connection on OPEN @@@');
});

dbConnection.on('connected', function () {
    console.log('@@@ Mongoose Server Connection ON CONNECTED @@@');
});

dbConnection.on('disconnected', function () {
    console.error('!!!@@@ Mongoose Server Connection on disconnected @@@!!! ');
});

process.on('SIGINT', function () {
    dbConnection.close(function () {
        console.error('!!!!!! Terminated Application Ts and mongoose disconnected  !!!!!! ');
        process.exit(0);
    });
});
