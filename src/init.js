import app from "./server";

const PORT = 4000;

const handleListening = () => console.log(`✅ Server is Running on PORT http://localhost:${PORT} 🚀🚀`);

app.listen(PORT, handleListening);
