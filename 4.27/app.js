const fs = require('fs');
const http = require('http');

// fs.writeFileSync('./text.txt', 'File uusgeh module shalgaj baina...');

// const data = fs.readFileSync('./text.txt', 'utf-8')
// console.log(data);

// fs.we

// fs.writeFile('./async.txt', 'async function', () => {
//     console.log('file amjilttai uusgelee...')
// });

// console.log('File uusgej baina...')

// fs.readFile('./async.txt', 'utf-8', (err, dta) => {
//     fs.readFile(`./${dta}.txt`, 'utf-8', (err, data1) => {
//         console.log(data1)
//     })
// })
const html = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const objData = JSON.parse(data);

const newHTML = (template, nameData) => {
    let fullName = `${nameData.title}. ${nameData.first} ${nameData.last}`
    let garalt = template.replace(/{%username%}/g , fullName);

    return garalt;
}

const server = http.createServer((req, res) => {
    let path = req.url;
    if(path === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<body><h1>Home page...</h1></body>')
        res.write('</html>')
        res.end();
    } else if (path === '/about'){
        res.end('Bidnii tuhai...');
    } else if (path === '/contact'){
        res.writeHead(200, { "Content-type" : "text/html" })
        const shineHTML = objData.results.map(el => newHTML(html, el.name)).join('');
        res.end(shineHTML);
    } else if(path === '/api'){
        res.writeHead(200, { "Content-type" : "application/json" })
        res.end(data);
    } else {
        res.writeHead(404);
        res.end('Page not found')
    }
})

server.listen(3000, () => {
    console.log('3000 Portiig sonsoj baina');
})

// 3rd library package 
// NPM - Node Package Management