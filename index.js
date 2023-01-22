const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const my = await fs.readFile(fileName , "utf8", function(err,data)  {
		console.log(data)
	 }) ;
	
	console.log(my)
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName)
}
//myFileWriter("kapilyadav.txt" , "My name is Kapil")
//myFileUpdater("kapilyadav.txt", " I am a student")
//myFileDeleter("kapil.txt")
myFileReader("kapilyadav.txt")


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }