const fse = require('fs-extra')

async function createFolder(cf) {
    try {
        await fse.emptyDir(`./homework2/${cf}`)
        console.log('folder created')
    } catch (err) {
        console.error(err)
    }
}

async function txtFile(f) {
    try {
        await fse.ensureFile(f)
        console.log('file created')
    } catch (err) {
        console.error(err)
    }
}

async function moveFile(src, dest) {
    try {
        await fse.move(src, dest)
        console.log('file moved')
    } catch (err) {
        console.error(err)
    }
}

async function rFile(src) {
    try {
        fse.remove(src)
        console.log('removed')
    } catch (err) {
        console.error(err)
    }
}


async function init() {
    await Promise.all([
        createFolder('folder_1'),
        createFolder('folder_2'),
        createFolder('folder_3')
    ])
    //await createFolder('folder_1')
    await txtFile('./homework2/folder_1/readme.txt')
    //await createFolder('folder_2')
    await moveFile('./homework2/folder_1/readme.txt', './homework2/folder_2/readme.txt')
    //await createFolder('folder_3')
    await moveFile('./homework2/folder_2/readme.txt', './homework2/folder_3/readme.txt')
    await rFile('./homework2/folder_3/readme.txt')

    await Promise.all([
        rFile('./homework2/folder_3'),
        rFile('./homework2/folder_2'),
        rFile('./homework2/folder_1')
    ])


}

init().then(r => console.log('Task done!'))