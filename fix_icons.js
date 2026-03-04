const fs = require('fs');

const tp = 'src/app/products/steel-cementitious/page.tsx';
if (fs.existsSync(tp)) {
    let cnt = fs.readFileSync(tp, 'utf8');
    cnt = cnt.replace(/\{ title: "([^"]+)", icon: ([\w]+) \}/g, '{ title: "$1", icon: <$2 size={24} /> }');
    fs.writeFileSync(tp, cnt, 'utf8');
    console.log('Fixed steel page');
}

const wc = 'src/app/products/wood-core/page.tsx';
if (fs.existsSync(wc)) {
    let wcnt = fs.readFileSync(wc, 'utf8');
    wcnt = wcnt.replace(/\{ title: "([^"]+)", icon: ([\w]+) \}/g, '{ title: "$1", icon: <$2 size={24} /> }');
    fs.writeFileSync(wc, wcnt, 'utf8');
    console.log('Fixed wood-core page');
}

const pp = 'src/app/products/page.tsx';
if (fs.existsSync(pp)) {
    let pcnt = fs.readFileSync(pp, 'utf8');
    pcnt = pcnt.replace(/\{ title: "([^"]+)", icon: ([\w]+) \}/g, '{ title: "$1", icon: <$2 size={24} /> }');
    fs.writeFileSync(pp, pcnt, 'utf8');
    console.log('Fixed products page');
}
