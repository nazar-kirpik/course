let library = [
    sus = {
        title: 'snus',
        author: 'gus',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    nus = {
        title: 'snus',
        author: 'gus',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    Lus = {
        title: 'snus',
        author: 'gus',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
]
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

let {title} = library[0]
