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

let passed = 0
let failed = 0
let total = 0

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

export function category(name: string, tests: () => void) {
    console.log(`> ${chalk.bold`${name}`}`)
    console.group()

    let oldPassed = passed
    let oldFailed = failed
    let oldTotal = total

    tests()

    if (failed > oldFailed) {
        console.log(chalk.red`✗ ${failed - oldFailed}/${total - oldTotal} failed`)
    }
    if (passed > oldPassed) {
        console.log(chalk.green`✓ ${passed - oldPassed}/${total - oldTotal} passed`)
    }
    console.groupEnd()
}

export function test(test: string, assertions: () => void) {
    try {
        total++
        assertions()
        // console.log(process.argv)
        if (!process.argv.includes('--only-fail') && process.argv.includes('--verbose'))
            console.log(chalk.green`✓ Passed: ${chalk.white(test)}`)
        passed++
    } catch (e) {
        console.log(chalk.red`✗ Failed: ${chalk.white(test)}`)
        console.log(e)
        failed++
    }
}

export function report() {
    console.log(chalk`{green ${passed}} passed, {red ${failed}} failed, {white ${total}} total`)
}