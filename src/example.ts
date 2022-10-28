// @ts-ignore
import { c } from './index.js'

const simple = c`Hello, world!`.json()
// { text: 'Hello, world!' }

const formatting = c`This is some important text`.red().underlined().italic().json()

const nested = c`Hello, ${c`world`.bold()}`.red().json()
// { text: 'Hello, ', color: 'red', extra: [ { text: 'world', bold: true } ] }
// &cHello, &lworld

