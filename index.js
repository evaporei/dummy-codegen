const fs = require('fs')

const template = fs.readFileSync('./template.txt', { encoding: 'utf-8' })

const contextVars = require('./context-vars.json')

// console.log('template', template)

const final = contextVars
  .map(Object.entries)
  .reduce(
    (acc, props) =>
      acc + props.reduce(
        (t, [key, value]) => t.replace(new RegExp(`{{${key}}}`, 'g'), value),
        template
      ),
    ''
  )

// console.log('final', final)

fs.writeFileSync('output.txt', final)
