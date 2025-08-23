import app from "./main";
import env from 'dotenv';
env.config();

const PORT = process.env.PORT || 4000;



app.listen(PORT,() => console.log(`Server is running in port: ${PORT}`))