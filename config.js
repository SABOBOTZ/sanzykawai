/**


   * Create By Sabo.


   * Contact Me on wa.me/6282145203493


*/





const fs = require('fs')


const chalk = require('chalk')





// Website Api


global.APIs = {


	zenz: 'https://zenzapi.xyz',


}





// Apikey Website Api


global.APIKeys = {

'https://zenzapi.xyz': 'sanzychan01'

}





// Other


global.owner = [ '6282145203493' ]


global.premium = ['6282245203493']


global.packname = 'Sabo'


global.author = 'Botz'


global.sessionName = 'hisoka'


global.prefa = ['','!','.','🐦','🐤','🗿']


global.sp = '⭔'


global.mess = {


    success: '✓ Success',


    admin: 'Fitur Ini Khusus Admin Group!',


    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',


    owner: 'Fitur Khusus Owner Bot',


    group: 'Fitur Ini Hanya Bisa Di Gunakan Di Group!',


    private: 'Fitur Hanya Bisa Digunakan Di Private Chat!',


    bot: 'Fitur Khusus Pengguna Nomor Bot',


    wait: 'Loading...',


    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 9',


}


global.limitawal = {


    premium: "Infinity",


    free: 30


}


global.thumb = fs.readFileSync('./lib/hisoka.jpg')





let file = require.resolve(__filename)


fs.watchFile(file, () => {


	fs.unwatchFile(file)


	console.log(chalk.redBright(`Update'${__filename}'`))


	delete require.cache[file]


	require(file)


})
