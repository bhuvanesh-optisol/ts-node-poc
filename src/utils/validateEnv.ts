import { cleanEnv, str } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    MONGO_USER: str(),
    MONGO_PASSWORD: str(),
    MONGODB_HOST: str()
  });
}

export default validateEnv;
