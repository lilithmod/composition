import { bold, c, k, link, t } from './index'
import { ChatMessage } from 'prismarine-chat'

let component = c`A death has occurred. Press ${k`swapOffhand`} to pay respects. ${
    t`death.attack.player.item ${'_jeb'} ${'Notch'} ${t`item.minecraft.wooden_shovel`}`.reset()
}`.red().bold()

component = c`Hello, ${link`${'https://example.com'}world`}`.red()

console.log(JSON.stringify(component.json(), null, 2))

const message = new ChatMessage(component.json() as any)

console.log(message.toMotd())



