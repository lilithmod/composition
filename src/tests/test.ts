import * as a from "typed-assert";
import {
    blue,
    bold,
    c,
    Component,
    cx, green,
    italic,
    key, KeybindComponent,
    link,
    red, score, ScoreComponent, sel, SelectorComponent,
    t,
    TextComponent,
    TranslatableComponent,
    underlined, yellow, aqua, white, black, gray, darkRed, darkBlue, darkGreen, darkAqua,
    darkPurple, gold, darkGray, lightPurple, reset, color, insert, cmd, suggest, page,
    copy, twitch, file, hover, item, entity, achievement, strikethrough, obfuscated
} from '../index'
import { ChatMessage } from 'prismarine-chat'
import {
    category,
    isComponent,
    isKeybindComponent,
    isScoreComponent,
    isSelectorComponent,
    isTextComponent, isTranslatableComponent, report,
    test
} from './assertions'
import { isExactly } from 'typed-assert'

category('Basic Text', () => {
    test('basic text component', () => {
        const one = c`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
    })

    test('basic text component with formatting', () => {
        const one = c`Hello world`.red().bold().italic().json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'red')
        a.isExactly(one.bold, true)
        a.isExactly(one.italic, true)
    })
})

category('Color Shortcuts', () => {
    test('shortcut red text component', () => {
        const one = red`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'red')
    })

    test('shortcut blue text component', () => {
        const one = blue`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'blue')
    })

    test('shortcut green text component', () => {
        const one = green`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'green')
    })

    test('shortcut yellow text component', () => {
        const one = yellow`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'yellow')
    })

    test('shortcut aqua text component', () => {
        const one = aqua`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'aqua')
    })

    test('shortcut white text component', () => {
        const one = white`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'white')
    })

    test('shortcut black text component', () => {
        const one = black`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'black')
    })

    test('shortcut gray text component', () => {
        const one = gray`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'gray')
    })

    test('shortcut dark red text component', () => {
        const one = darkRed`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'dark_red')
    })

    test('shortcut dark blue text component', () => {
        const one = darkBlue`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'dark_blue')
    })

    test('shortcut dark green text component', () => {
        const one = darkGreen`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'dark_green')
    })

    test('shortcut dark aqua text component', () => {
        const one = darkAqua`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'dark_aqua')
    })

    test('shortcut dark purple text component', () => {
        const one = darkPurple`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'dark_purple')
    })

    test('shortcut dark gray text component', () => {
        const one = darkGray`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'dark_gray')
    })

    test('shortcut gold text component', () => {
        const one = gold`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'gold')
    })

    test('shortcut light purple text component', () => {
        const one = lightPurple`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'light_purple')
    })

    test('shortcut reset text component', () => {
        const one = reset`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, 'reset')
    })

    test('shortcut color text component', () => {
        const one = color`${'#FFFFFF'}Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.color, '#FFFFFF')
    })
})

category('Formatting Shortcuts', () => {
    test('shortcut bold text component', () => {
        const one = bold`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.bold, true)
    })

    test('shortcut italic text component', () => {
        const one = italic`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.italic, true)
    })

    test('shortcut underlined text component', () => {
        const one = underlined`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.underlined, true)
    })

    test('shortcut strikethrough text component', () => {
        const one = strikethrough`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.strikethrough, true)
    })

    test('shortcut obfuscated text component', () => {
        const one = obfuscated`Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.obfuscated, true)
    })
})

category('Insertion and Event Shortcuts', () => {
    test('shortcut insertion text component', () => {
        const one = insert`${'test'}Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.insertion, 'test')
    })

    test('shortcut link text component', () => {
        const one = link`${'https://example.com'}Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.clickEvent?.action, 'open_url')
        a.isExactly(one.clickEvent?.value, 'https://example.com')
    })

    test('shortcut run command text component', () => {
        const one = cmd`${'/test'}Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.clickEvent?.action, 'run_command')
        a.isExactly(one.clickEvent?.value, '/test')
    })

    test('shortcut suggest command text component', () => {
        const one = suggest`${'/test'}Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.clickEvent?.action, 'suggest_command')
        a.isExactly(one.clickEvent?.value, '/test')
    })

    test('shortcut change page text component', () => {
        const one = page`${1}Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.clickEvent?.action, 'change_page')
        a.isExactly(one.clickEvent?.value, 1)
    })

    test('shortcut copy to clipboard text component', () => {
        const one = copy`${'test'}Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.clickEvent?.action, 'copy_to_clipboard')
        a.isExactly(one.clickEvent?.value, 'test')
    })

    test('shortcut twitch user text component', () => {
        const one = twitch`${'test'}Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.clickEvent?.action, 'twitch_user_info')
        a.isExactly(one.clickEvent?.value, 'test')
    })

    test('shortcut open file text component', () => {
        const one = file`${'test'}Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.clickEvent?.action, 'open_file')
        a.isExactly(one.clickEvent?.value, 'test')
    })

    test('shortcut hover text component', () => {
        const one = hover`${'test'}Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.hoverEvent?.action, 'show_text')
        a.isExactly(one.hoverEvent?.value, 'test')
    })

    test('shortcut hover item text component', () => {
        const one = item`${'{"name":"hello"}'}Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.hoverEvent?.action, 'show_item')
        a.isExactly(one.hoverEvent?.value, '{"name":"hello"}')
    })

    test('shortcut hover entity text component', () => {
        const one = entity`${'{"name":"hello"}'}Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.hoverEvent?.action, 'show_entity')
        a.isExactly(one.hoverEvent?.value, '{"name":"hello"}')
    })

    test('shortcut hover achievement text component', () => {
        const one = achievement`${'test'}Hello world`.json()
        isComponent(one)
        isTextComponent(one)
        a.isExactly(one.text, 'Hello world')
        a.isExactly(one.hoverEvent?.action, 'show_achievement')
        a.isExactly(one.hoverEvent?.value, 'test')
    })
})

category('Other Shortcuts', () => {
    test('simple translatable component', () => {
        const one = t`item.minecraft.wooden_shovel`.json()
        isComponent(one)
        isTranslatableComponent(one)
        a.isExactly(one.translate, 'item.minecraft.wooden_shovel')
        a.isExactly(one.with, undefined)
    })

    test('translatable component with substitutions', () => {
        const one = t`death.attack.player.item ${'_jeb'} ${'Notch'} ${t`item.minecraft.wooden_shovel`}`.json()
        isComponent(one)
        isTranslatableComponent(one)
        a.isExactly(one.translate, 'death.attack.player.item')
        a.isExactly(one.with?.[0], '_jeb')
        a.isExactly(one.with?.[1], 'Notch')
        isTranslatableComponent(one.with?.[2])
    })

    test('shortcut keybind component', () => {
        const one = key('swapOffhand').json()
        isComponent(one)
        isKeybindComponent(one)
        a.isExactly(one.keybind, 'swapOffhand')
    })

    test('shortcut selector component', () => {
        const one = sel('@a').json()
        isComponent(one)
        isSelectorComponent(one)
        a.isExactly(one.selector, '@a')
    })

    test('shortcut score component', () => {
        const one = score('foo', 'bar', 'val').json()
        isComponent(one)
        isScoreComponent(one)
        isExactly(one.score.name, 'foo')
        isExactly(one.score.objective, 'bar')
        isExactly(one.score.value, 'val')
    })

    test('shortcut score component with no value', () => {
        const one = score('foo', 'bar').json()
        isComponent(one)
        isScoreComponent(one)
        isExactly(one.score.name, 'foo')
        isExactly(one.score.objective, 'bar')
        isExactly(one.score.value, undefined)
    })
})

category('Color Code Support', () => {
    test('color code support', () => {
        const component = c`&2&ltest${red`this part is red`}&0this is black`.json()
        isComponent(component)
        isTextComponent(component)
        a.isExactly(component.text, 'test')
        a.isExactly(component.color, 'dark_green')
        a.isExactly(component.bold, true)
        isTextComponent(component.extra?.[0])
        a.isExactly(component.extra?.[0].text, 'this part is red')
        a.isExactly(component.extra?.[0].color, 'red')
        isTextComponent(component.extra?.[1])
        a.isExactly(component.extra?.[1].text, 'this is black')
        a.isExactly(component.extra?.[1].color, 'black')
    })
})

report()