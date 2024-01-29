const fse = require('fs-extra')
fse.mkdirpSync('first_folder')
console.log('Create first folder')

fse.createFileSync('./first_folder/readme_file.txt')
console.log('Create readme file')

fse.mkdirpSync('second_folder')
console.log('Create second folder')

fse.moveSync('./first_folder/readme_file.txt', './second_folder/readme_file.txt')
console.log('move file to second folder')

fse.mkdirpSync('third_folder')
console.log('Create third folder')

fse.moveSync('./second_folder/readme_file.txt', './third_folder/readme_file.txt')
console.log('move file to third folder')

fse.removeSync('./third_folder/readme_file.txt')
console.log('Remove file')

fse.removeSync('./first_folder')
fse.removeSync('./second_folder')
fse.removeSync('./third_folder')
console.log('Remove all folders')