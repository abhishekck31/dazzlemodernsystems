const fs = require('fs');
const path = require('path');

const replacements = [
    { regex: /bg-\[#fafafa\]/g, replacement: 'bg-muted' },
    { regex: /bg-\[#fdfdfd\]/g, replacement: 'bg-background' },
    { regex: /bg-\[#0a0f1d\]/g, replacement: 'bg-slate-900' },
    { regex: /bg-\[#0a0a0a\]/g, replacement: 'bg-slate-900' },
    { regex: /to-\[#111\]/g, replacement: 'to-slate-950' },
    { regex: /from-\[#12071f\]/g, replacement: 'from-slate-950' },
    { regex: /via-\[#090b14\]/g, replacement: 'via-slate-900' },
    { regex: /to-\[#140b2e\]/g, replacement: 'to-slate-950' },
    { regex: /bg-\[#0a0b0d\]/g, replacement: 'bg-slate-900' },
    { regex: /bg-[#110e16]/g, replacement: 'bg-slate-900' },
    { regex: /bg-\[#0f0f13\]/g, replacement: 'bg-slate-900' },
    { regex: /bg-blue-600/g, replacement: 'bg-brand-600' },
    { regex: /text-blue-600/g, replacement: 'text-brand-600' },
    { regex: /border-blue-600/g, replacement: 'border-brand-600' },
    { regex: /bg-blue-500/g, replacement: 'bg-brand-500' },
    { regex: /text-blue-500/g, replacement: 'text-brand-500' },
    { regex: /text-blue-400/g, replacement: 'text-brand-400' },
    { regex: /text-blue-300/g, replacement: 'text-brand-300' },
    { regex: /text-gray-900/g, replacement: 'text-foreground' },
    { regex: /text-gray-500/g, replacement: 'text-muted-foreground' },
    { regex: /text-gray-400/g, replacement: 'text-slate-400' },
    { regex: /border-gray-100/g, replacement: 'border-border' },
    { regex: /border-gray-200/g, replacement: 'border-border' },
    { regex: /rounded-\[24px\]/g, replacement: 'rounded-lg' },
    { regex: /rounded-\[32px\]/g, replacement: 'rounded-lg' },
    { regex: /rounded-3xl/g, replacement: 'rounded-lg' },
    { regex: /rounded-\[40px\]/g, replacement: 'rounded-xl' },
    { regex: /rounded-\[60px\]/g, replacement: 'rounded-xl' },
    { regex: /rounded-b-\[40px\]/g, replacement: 'rounded-b-2xl' },
    { regex: /rounded-b-\[80px\]/g, replacement: 'rounded-b-2xl' },
    { regex: /py-32/g, replacement: 'py-24' },
];

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            for (const { regex, replacement } of replacements) {
                content = content.replace(regex, replacement);
            }
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

processDirectory(path.join(__dirname, 'src'));
