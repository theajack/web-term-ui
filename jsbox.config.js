window.jsboxConfig = {"libs":{"web-term-ui":"https://cdn.jsdelivr.net/npm/web-term-ui"},"iifeMap":{"web-term-ui":"WebTermUi"},"codes":{"Basic Use":{"dep":["web-term-ui"],"desc":"Basic usage of web-term-ui","hideLog":true,"code":"<div id=\"container\" style=\"height: 400px;\"></div>\n<script>\n    import { WebTerm } from 'web-term-ui';\n    const term = new WebTerm({\n        title: 'This is a Demo.\\n',\n        container: '#container',\n        header: '/ admin$ ',\n    });\n    term.on('enter', (line) => {\n        term.write(`Exec: ${line}`);\n    });\n</script>","lang":"html"},"More Function":{"dep":["web-term-ui"],"desc":"Basic usage of web-term-ui","hideLog":true,"code":"<div id=\"container\" style=\"height: 400px;\"></div>\n<script>\n    import { WebTerm } from 'web-term-ui';\n\n    const term = new WebTerm({\n        title: 'This is a Demo. Type \"help\" to get Help.\\n',\n        container: '#container',\n        header: '/ admin$ ',\n        style: {padding: 10}\n    });\n    term.on('enter', v => {\n        if (!v) {\n            term.newLine();\n        } else if (v === 'clear') {\n            term.clearTerminal();\n        } else if (v === 'help') {\n            writeHelp();\n        } else if (v.startsWith('header')) {\n            term.setHeader(`/ ${v.replace('header', '').trim()}$ `);\n            term.write(`SetHeader \"${v}\"`);\n        } else if (v === 'theme') {\n            const target = term.theme === 'dark' ? 'light' : 'dark';\n            term.setTheme(target);\n            term.write(`Set theme to \"${target}\"`);\n        } else if (v.startsWith('font')) {\n            const size = parseInt(v.replace('font', '').trim());\n            term.setFontSize(size);\n            term.write(`Set FontSize = \"${size}\"`);\n        } else {\n            term.write(`Exec \"${v}\"`);\n        }\n    });\n    term.on('tab', () => {\n        term.insertText('[mock completion]');\n    });\n    function writeHelp () {\n        term.write([\n            'clear   : Clear Terminal',\n            'header  : \"header <name>\" to Set Header',\n            'theme   : Toggle theme between dark and light',\n            'font    : \"font <size>\" to set font-size'\n        ].join('\\n'), {html: false});\n    }\n</script>","lang":"html"},"Use Below":{"dep":["web-term-ui"],"desc":"Basic usage of web-term-ui","hideLog":true,"code":"<div id=\"container\" style=\"height: 400px;\"></div>\n<script>\n    import { WebTerm } from 'web-term-ui';\n    const term = new WebTerm({\n        title: 'This is a Demo. Try type progress\\n',\n        container: '#container',\n        header: '/ admin$ ',\n    });\n    term.on('enter', (line) => {\n        if (line === 'progress') {\n            mockProgress();\n        } else {\n            term.write(`Exec: ${line}`);\n        }\n    });\n\n    function mockProgress () {\n        let progress = 0;\n        const time = Date.now();\n        const interval = setInterval(() => {\n            progress += Math.round(Math.random() * 10);\n            if (progress > 100) {\n                progress = 100;\n                clearInterval(interval);\n            }\n            term.writeBelow(`Progressing...[${progress}%]`);\n            if (progress === 100) {\n                term.clearBelow();\n                term.write(`Progress Done in ${Date.now() - time}ms!`);\n            }\n        }, 100);\n    }\n</script>","lang":"html"},"Hint":{"dep":["web-term-ui"],"desc":"Basic usage of web-term-ui","hideLog":true,"code":"<div id=\"container\" style=\"height: 400px;\"></div>\n<script>\n    import { WebTerm } from 'web-term-ui';\n    const term = new WebTerm({\n        title: 'This is a Hint Demo.\\n',\n        container: '#container',\n        header: '/ admin$ ',\n    });\n    let timer = null;\n    function startHint (v) {\n        clearHint();\n        if(!v) return;\n        timer = setTimeout(() => {\n            term.writeBelow(`${v}-mock-hint1 ${v}-mock-hint1`);\n        }, 1000);\n    }\n    function clearHint () {\n        term.clearBelow();\n        clearTimeout(timer);\n    }\n    term.on('input', startHint);\n    term.on('enter', (line) => {\n        clearHint();\n        term.write(`Exec: ${line}`);\n    });\n</script>","lang":"html"},"Use Editor":{"dep":["web-term-ui"],"desc":"Basic usage of web-term-ui","hideLog":true,"code":"<div id=\"container\" style=\"height: 400px;\"></div>\n<script>\n    import { WebTerm } from 'web-term-ui';\n    const term = new WebTerm({\n        title: 'This is a Demo. Try type vi\\n',\n        container: '#container',\n        header: '/ admin$ ',\n    });\n    term.on('enter', (line) => {\n        if(line === 'vi'){\n            const editor = term.edit('Hello world!\\nFrom web-term-ui.', {\n                title: `${line.substring(3)} \"Ctrl/Cmd + s\" to Save, \"Esc\" to Exit`\n            });\n            editor.on('edit-done', () => { term.write(`Edit Save: ${line}`);});\n            editor.on('edit-cancel', () => { term.write('Edit canceled.'); })\n        } else {\n            term.write(`Exec: ${line}`);\n        }\n    });\n</script>","lang":"html"}}}