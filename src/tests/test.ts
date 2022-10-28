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
    underlined
} from '../index'
import { ChatMessage } from 'prismarine-chat'
import {
    isComponent,
    isKeybindComponent,
    isScoreComponent,
    isSelectorComponent,
    isTextComponent, isTranslatableComponent,
    test
} from './assertions'
import { isExactly } from 'typed-assert'

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

test('shortcut red text component', () => {
    const one = red`Hello world`.json()
    isComponent(one)
    isTextComponent(one)
    a.isExactly(one.text, 'Hello world')
    a.isExactly(one.color, 'red')
})

test('shortcut link text component', () => {
    const one = link`${'https://example.com'}Hello world`.json()
    isComponent(one)
    isTextComponent(one)
    a.isExactly(one.text, 'Hello world')
    a.isExactly(one.clickEvent?.action, 'open_url')
    a.isExactly(one.clickEvent?.value, 'https://example.com')
})

test('simple translatable component', () => {
    const one = t`item.minecraft.wooden_shovel`.json()
    isComponent(one)
    isTranslatableComponent(one)
    a.isExactly(one.translate, 'item.minecraft.wooden_shovel')
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