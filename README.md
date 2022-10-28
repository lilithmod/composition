# Composition

Compose complex chat components in Typescript using tagged template literals. Offers nested template literals, all types of components, Notch color code support, click events, hover events, and more.

```ts
import { c } from 'unborn-chat'

const simple = c`Hello, world!`.json()
// { text: 'Hello, world!' }

const formatting = c`This is some important text`.red().underlined().italic().json()

const nested = c`Hello, ${c`world`.bold()}`.red().json()
// { text: 'Hello, ', color: 'red', extra: [ { text: 'world', bold: true } ] }
// &cHello, &lworld
```

More documentation coming soon