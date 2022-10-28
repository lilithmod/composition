import {
    Component,
    KeybindComponent,
    ScoreComponent,
    SelectorComponent,
    TextComponent,
    TranslatableComponent
} from '../index.js'
import * as a from 'typed-assert'
import chalk from 'chalk'

export function isComponent(input: unknown): asserts input is Component {
    a.isRecord(input)
}

export function isTextComponent(input: unknown): asserts input is TextComponent {
    a.isRecord(input)
    a.isString(input.text)
}

export function isTranslatableComponent(input: unknown): asserts input is TranslatableComponent {
    a.isRecord(input)
    a.isString(input.translate)
    a.isOptionOfType(input.with, a.isArray)
}

export function isKeybindComponent(input: unknown): asserts input is KeybindComponent {
    a.isRecord(input)
    a.isString(input.keybind)
}

export function isScoreComponent(input: unknown): asserts input is ScoreComponent {
    a.isRecord(input)
    a.isRecord(input.score)
    a.isString(input.score.name)
    a.isString(input.score.objective)
    a.isOptionOfType(input.score.value, a.isString)
}

export function isSelectorComponent(input: unknown): asserts input is SelectorComponent {
    a.isRecord(input)
    a.isString(input.selector)
}

export function test(test: string, assertions: () => void) {
    try {
        assertions()
        console.log(chalk.green`✓ Passed: ${chalk.white(test)}`)
    } catch (e) {
        console.log(chalk.red`✗ Failed: ${chalk.white(test)}`)
        console.log(e)
    }
}