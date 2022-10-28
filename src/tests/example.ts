// @ts-ignore
import { c } from '../index.js'

const simple = c`Hello, world!`.json()
// { text: 'Hello, world!' }

const formatting = c`This is some important text`.red().underlined().italic().json()

const nested = c`Hello, ${c`world`.bold()}`.red().json()
// { text: 'Hello, ', color: 'red', extra: [ { text: 'world', bold: true } ] }
// &cHello, &lworld

// let component = c`A death has occurred. Press ${key(`swapOffhand`)} to pay respects. ${
//     t`death.attack.player.item ${'_jeb'} ${'Notch'} ${t`item.minecraft.wooden_shovel`}`.reset()
// }`.red().bold()
//
// component = cx(blue, underlined)`Example`.link('https://example.com')
//
// console.log(JSON.stringify(component.json(), null, 2))
//
// const message = new ChatMessage(component.json() as any)
//
// console.log(message.toMotd())