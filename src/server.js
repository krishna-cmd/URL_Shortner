const app = require("./app");
const { connectRedis } = require("./config/redis");

const PORT = 3000;
//establish redis connection

async function startServer() {
  try {
    await connectRedis();

    app.listen(PORT, () => {
      console.log(`Server is running on the port ${PORT}`);
    });
  } catch (err) {
    console.log("Failed to start the Server", err);
  }
}

startServer();
