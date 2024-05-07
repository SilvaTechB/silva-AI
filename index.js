const bot = require(__dirname + '/lib/version')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`Starting Gifted ${VERSION}`)
  try {
    await bot.init()
    //bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
