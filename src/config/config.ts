import * as env from '../util/environment'

const environment = env.str('NODE_ENV', 'development')
const debugPrefix = `company-service-${environment} `

if (debugPrefix) {
    process.env.DEBUG = debugPrefix
}

export const config = {
    environment,
    appName: 'company-service',
    mongoDB: {
        host: env.str('MONGO_HOST', '0.0.0.0'),
        port: env.str('MONGO_PORT', '27017'),
        dbName:
            env.str('MONGO_DB', 'mCompany'),
        user: env.str('MONGO_USER', ''),
        pass: env.str('MONGO_PASS', ''),
    },
    setting: {}
}
