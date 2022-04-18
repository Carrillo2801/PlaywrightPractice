import dotenv from 'dotenv';
dotenv.config();

const testData = {
    userCredentials: {
        useremail: process.env.USEREMAIL,
        password: process.env.PASSWORD
    }
}

export default testData