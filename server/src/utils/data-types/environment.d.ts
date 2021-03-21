declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            CLIENT_URI: string;
            MONGO_URI: string;
            JWT_KEY: string;
            PORT?: string;
        }
    }
}

export {};
