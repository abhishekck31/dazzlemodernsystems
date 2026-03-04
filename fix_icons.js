const fs = require('fs');
const path = require('path');

function processFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processFiles(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Fix icon passing to Client Components error
            // Matches: { title: "Some Title", icon: SomeIcon }
            content = content.replace(/\{\s*title:\s*"([^"]+)",\s*icon:\s*([A-Za-z0-9_]+)\s*\}/g, '{ title: "$1", icon: <$2 size={24} /> }');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Fixed icons in: ' + fullPath);
            }
        }
    }
}

processFiles(path.join(__dirname, 'src', 'app', 'products'));
