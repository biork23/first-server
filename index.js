
// const http = require('http')

// const server = http.createServer((request, response)=> {
//     console.log('method:', request.method)
//     console.log('url:', request.url)
//     console.log('headers:', request.headers)
//     response.write('Hola desde mi primer servidor')
//     response.end()
// })

// server.listen(8080, ()=>{
//     console.log('Server listening')
// })


const http = require('http')

const server = http.createServer((request, response)=> {
    console.log('method:', request.method)
    console.log('url:', request.url)
    if (request.method == 'GET' && request.url == '/hola'){
        response.write('Hola Mundo')
    }if (request.method == 'POST' && request.url == '/hola'){
        response.write('Aqui puedes crear un recurso')
    }if(request.method == 'DELETE' && request.url == 'hola'){
        response.write('Aqui puedes borrar un recurso')
    }if(request.method == 'GET' && request.url == '/adios'){
        response.write('Adios :c')
    }else
    
    
    response.write('  Hola desde el servidor')
    response.end()
})

server.listen(8080, ()=>{
    console.log('Server listening')
})

