export type ChatColor = 'black' | 'dark_blue' | 'dark_green' | 'dark_aqua' | 'dark_red' | 'dark_purple' | 'gold' | 'gray'
    | 'dark_gray' | 'blue' | 'green' | 'aqua' | 'red' | 'light_purple' | 'yellow' | 'white' | `#${string}` | 'reset'

export type ClickActions = 'open_url' | 'run_command' | 'suggest_command' | 'change_page' | 'copy_to_clipboard' | 'twitch_user_info' | 'open_file'
export type HoverActions = 'show_text' | 'show_item' | 'show_entity' | 'show_achievement'

export interface Component {
    bold?: boolean
    italic?: boolean
    underlined?: boolean
    strikethrough?: boolean
    obfuscated?: boolean
    color?: ChatColor
    insertion?: string
    clickEvent?: {
        action: ClickActions
        value: any
    }
    hoverEvent?: {
        action: HoverActions
        value: string | Component
    }
    extra?: Component[]
}

export interface TextComponent extends Component {
    text: string
}

export interface TranslatableComponent extends Component {
    translate: string
    with?: (string | Component)[]
}

export interface KeybindComponent extends Component {
    keybind: string
}

export interface ScoreComponent extends Component {
    score: {
        name: string
        objective: string
        value?: string
    }
}

export interface SelectorComponent extends Component {
    selector: string
}

abstract class ComponentBuilder {
    iBold: boolean
    iItalic: boolean
    iUnderlined: boolean
    iStrikethrough: boolean
    iObfuscated: boolean
    iColor: ChatColor
    iInsertion: string
    iClickEvent: {
        action: ClickActions
        value: string
    }
    iHoverEvent: {
        action: HoverActions
        value: string | ComponentBuilder
    }
    iExtra: ComponentBuilder[]

    abstract json(): Component

    bold(bold: boolean = true): ComponentBuilder {
        this.iBold = bold
        return this
    }

    italic(italic: boolean = true): ComponentBuilder {
        this.iItalic = italic
        return this
    }

    underlined(underlined: boolean = true): ComponentBuilder {
        this.iUnderlined = underlined
        return this
    }

    strikethrough(strikethrough: boolean = true): ComponentBuilder {
        this.iStrikethrough = strikethrough
        return this
    }

    obfuscated(obfuscated: boolean = true): ComponentBuilder {
        this.iObfuscated = obfuscated
        return this
    }

    color(color: ChatColor): ComponentBuilder {
        this.iColor = color
        return this
    }

    black(): ComponentBuilder {
        return this.color('black')
    }

    darkBlue(): ComponentBuilder {
        return this.color('dark_blue')
    }

    darkGreen(): ComponentBuilder {
        return this.color('dark_green')
    }

    darkAqua(): ComponentBuilder {
        return this.color('dark_aqua')
    }

    darkRed(): ComponentBuilder {
        return this.color('dark_red')
    }

    darkPurple(): ComponentBuilder {
        return this.color('dark_purple')
    }

    gold(): ComponentBuilder {
        return this.color('gold')
    }

    gray(): ComponentBuilder {
        return this.color('gray')
    }

    darkGray(): ComponentBuilder {
        return this.color('dark_gray')
    }

    blue(): ComponentBuilder {
        return this.color('blue')
    }

    green(): ComponentBuilder {
        return this.color('green')
    }

    aqua(): ComponentBuilder {
        return this.color('aqua')
    }

    red(): ComponentBuilder {
        return this.color('red')
    }

    lightPurple(): ComponentBuilder {
        return this.color('light_purple')
    }

    yellow(): ComponentBuilder {
        return this.color('yellow')
    }

    white(): ComponentBuilder {
        return this.color('white')
    }

    reset(): ComponentBuilder {
        return this.color('reset')
    }

    hex(hex: string): ComponentBuilder {
        return this.color(`#${hex}`)
    }

    insertion(insertion: string): ComponentBuilder {
        this.iInsertion = insertion
        return this
    }

    clickEvent(action: ClickActions, value: any): ComponentBuilder {
        this.iClickEvent = {action, value}
        return this
    }

    hoverEvent(action: HoverActions, value: string | ComponentBuilder): ComponentBuilder {
        this.iHoverEvent = {action, value}
        return this
    }

    link(url: string): ComponentBuilder {
        return this.clickEvent('open_url', url)
    }

    cmd(command: string): ComponentBuilder {
        return this.clickEvent('run_command', command)
    }

    suggest(command: string): ComponentBuilder {
        return this.clickEvent('suggest_command', command)
    }

    page(page: number): ComponentBuilder {
        return this.clickEvent('change_page', page)
    }

    copy(text: string): ComponentBuilder {
        return this.clickEvent('copy_to_clipboard', text)
    }

    twitch(name: string): ComponentBuilder {
        return this.clickEvent('twitch_user_info', name)
    }

    file(path: string): ComponentBuilder {
        return this.clickEvent('open_file', path)
    }

    hover(text: string): ComponentBuilder {
        return this.hoverEvent('show_text', text)
    }

    item(item: string): ComponentBuilder {
        return this.hoverEvent('show_item', item)
    }

    entity(entity: string): ComponentBuilder {
        return this.hoverEvent('show_entity', entity)
    }

    achievement(achievement: string): ComponentBuilder {
        return this.hoverEvent('show_achievement', achievement)
    }

    extra(extra: ComponentBuilder | ComponentBuilder[]): ComponentBuilder {
        if (extra instanceof ComponentBuilder) {
            if (!Array.isArray(this.iExtra)) this.iExtra = []
            this.iExtra.push(extra)
            return this
        }
        this.iExtra = [...this.iExtra, ...extra]
        return this
    }
}

export class TextComponentBuilder extends ComponentBuilder {
    iText: string

    constructor(text: string) {
        super()
        for (let i = 0; i < text.length; i++) {
            if (text[i] === '§' || text[i] === '&') {
                switch (text[i + 1]) {
                    case '0':
                        this.black()
                        i++
                        continue
                    case '1':
                        this.darkBlue()
                        i++
                        continue
                    case '2':
                        this.darkGreen()
                        i++
                        continue
                    case '3':
                        this.darkAqua()
                        i++
                        continue
                    case '4':
                        this.darkRed()
                        i++
                        continue
                    case '5':
                        this.darkPurple()
                        i++
                        continue
                    case '6':
                        this.gold()
                        i++
                        continue
                    case '7':
                        this.gray()
                        i++
                        continue
                    case '8':
                        this.darkGray()
                        i++
                        continue
                    case '9':
                        this.blue()
                        i++
                        continue
                    case 'a':
                        this.green()
                        i++
                        continue
                    case 'b':
                        this.aqua()
                        i++
                        continue
                    case 'c':
                        this.red()
                        i++
                        continue
                    case 'd':
                        this.lightPurple()
                        i++
                        continue
                    case 'e':
                        this.yellow()
                        i++
                        continue
                    case 'f':
                        this.white()
                        i++
                        continue
                    case 'k':
                        this.obfuscated()
                        i++
                        continue
                    case 'l':
                        this.bold()
                        i++
                        continue
                    case 'm':
                        this.strikethrough()
                        i++
                        continue
                    case 'n':
                        this.underlined()
                        i++
                        continue
                    case 'o':
                        this.italic()
                        i++
                        continue
                    default:
                        this.iText = text.substring(i)
                        return
                }
            } else {
                this.iText = text.substring(i)
                return
            }
        }
        this.iText = text
    }

    json(): TextComponent {
        const component: TextComponent = {
            text: this.iText
        }
        if (this.iBold != null) component.bold = this.iBold
        if (this.iItalic != null) component.italic = this.iItalic
        if (this.iUnderlined != null) component.underlined = this.iUnderlined
        if (this.iStrikethrough != null) component.strikethrough = this.iStrikethrough
        if (this.iObfuscated != null) component.obfuscated = this.iObfuscated
        if (this.iColor != null) component.color = this.iColor
        if (this.iInsertion != null) component.insertion = this.iInsertion
        if (this.iClickEvent != null) component.clickEvent = this.iClickEvent
        if (this.iHoverEvent != null) {
            if (this.iHoverEvent.value instanceof ComponentBuilder) {
                component.hoverEvent = {
                    action: this.iHoverEvent.action,
                    value: this.iHoverEvent.value.json()
                }
            } else {
                component.hoverEvent = {
                    action: this.iHoverEvent.action,
                    value: this.iHoverEvent.value
                }
            }
        }
        if (this.iExtra != null) component.extra = this.iExtra.map(e => e.json())
        return component
    }
}

export class TranslatableComponentBuilder extends ComponentBuilder {
    iTranslate: string
    iWith: (string | ComponentBuilder)[]

    constructor(translate: string) {
        super()
        this.iTranslate = translate
    }

    with(...withs: (string | ComponentBuilder)[]): ComponentBuilder {
        if (Array.isArray(withs) && withs.length === 0) return this
        this.iWith = withs
        return this
    }

    json(): TranslatableComponent {
        const component: TranslatableComponent = {
            translate: this.iTranslate
        }
        if (this.iWith != null) component.with = this.iWith.map(w => w instanceof ComponentBuilder ? w.json() : w)
        if (this.iBold != null) component.bold = this.iBold
        if (this.iItalic != null) component.italic = this.iItalic
        if (this.iUnderlined != null) component.underlined = this.iUnderlined
        if (this.iStrikethrough != null) component.strikethrough = this.iStrikethrough
        if (this.iObfuscated != null) component.obfuscated = this.iObfuscated
        if (this.iColor != null) component.color = this.iColor
        if (this.iInsertion != null) component.insertion = this.iInsertion
        if (this.iClickEvent != null) component.clickEvent = this.iClickEvent
        if (this.iHoverEvent != null) {
            if (this.iHoverEvent.value instanceof ComponentBuilder) {
                component.hoverEvent = {
                    action: this.iHoverEvent.action,
                    value: this.iHoverEvent.value.json()
                }
            } else {
                component.hoverEvent = {
                    action: this.iHoverEvent.action,
                    value: this.iHoverEvent.value
                }
            }
        }
        if (this.iExtra != null) component.extra = this.iExtra.map(e => e.json())
        return component
    }
}

export class ScoreComponentBuilder extends ComponentBuilder {
    iScore: {
        name: string
        objective: string
        value?: string
    }

    constructor(name: string, objective: string) {
        super()
        this.iScore = {name, objective}
    }

    value(value: string): ComponentBuilder {
        this.iScore.value = value
        return this
    }

    json(): ScoreComponent {
        const component: ScoreComponent = {
            score: this.iScore
        }
        if (this.iBold != null) component.bold = this.iBold
        if (this.iItalic != null) component.italic = this.iItalic
        if (this.iUnderlined != null) component.underlined = this.iUnderlined
        if (this.iStrikethrough != null) component.strikethrough = this.iStrikethrough
        if (this.iObfuscated != null) component.obfuscated = this.iObfuscated
        if (this.iColor != null) component.color = this.iColor
        if (this.iInsertion != null) component.insertion = this.iInsertion
        if (this.iClickEvent != null) component.clickEvent = this.iClickEvent
        if (this.iHoverEvent != null) {
            if (this.iHoverEvent.value instanceof ComponentBuilder) {
                component.hoverEvent = {
                    action: this.iHoverEvent.action,
                    value: this.iHoverEvent.value.json()
                }
            } else {
                component.hoverEvent = {
                    action: this.iHoverEvent.action,
                    value: this.iHoverEvent.value
                }
            }
        }
        if (this.iExtra != null) component.extra = this.iExtra.map(e => e.json())
        return component
    }
}

export class KeybindComponentBuilder extends ComponentBuilder {
    iKeybind: string

    constructor(keybind: string) {
        super()
        this.iKeybind = keybind
    }

    json(): KeybindComponent {
        const component: KeybindComponent = {
            keybind: this.iKeybind
        }
        if (this.iBold != null) component.bold = this.iBold
        if (this.iItalic != null) component.italic = this.iItalic
        if (this.iUnderlined != null) component.underlined = this.iUnderlined
        if (this.iStrikethrough != null) component.strikethrough = this.iStrikethrough
        if (this.iObfuscated != null) component.obfuscated = this.iObfuscated
        if (this.iColor != null) component.color = this.iColor
        if (this.iInsertion != null) component.insertion = this.iInsertion
        if (this.iClickEvent != null) component.clickEvent = this.iClickEvent
        if (this.iHoverEvent != null) {
            if (this.iHoverEvent.value instanceof ComponentBuilder) {
                component.hoverEvent = {
                    action: this.iHoverEvent.action,
                    value: this.iHoverEvent.value.json()
                }
            } else {
                component.hoverEvent = {
                    action: this.iHoverEvent.action,
                    value: this.iHoverEvent.value
                }
            }
        }
        if (this.iExtra != null) component.extra = this.iExtra.map(e => e.json())
        return component
    }
}

export class SelectorComponentBuilder extends ComponentBuilder {
    iSelector: string

    constructor(selector: string) {
        super()
        this.iSelector = selector
    }

    json(): SelectorComponent {
        const component: SelectorComponent = {
            selector: this.iSelector
        }
        if (this.iBold != null) component.bold = this.iBold
        if (this.iItalic != null) component.italic = this.iItalic
        if (this.iUnderlined != null) component.underlined = this.iUnderlined
        if (this.iStrikethrough != null) component.strikethrough = this.iStrikethrough
        if (this.iObfuscated != null) component.obfuscated = this.iObfuscated
        if (this.iColor != null) component.color = this.iColor
        if (this.iInsertion != null) component.insertion = this.iInsertion
        if (this.iClickEvent != null) component.clickEvent = this.iClickEvent
        if (this.iHoverEvent != null) {
            if (this.iHoverEvent.value instanceof ComponentBuilder) {
                component.hoverEvent = {
                    action: this.iHoverEvent.action,
                    value: this.iHoverEvent.value.json()
                }
            } else {
                component.hoverEvent = {
                    action: this.iHoverEvent.action,
                    value: this.iHoverEvent.value
                }
            }
        }
        if (this.iExtra != null) component.extra = this.iExtra.map(e => e.json())
        return component
    }
}

type Formatter = (strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]) => ComponentBuilder

export function c(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {

    let component: ComponentBuilder = new TextComponentBuilder(strings[0])

    if (tags.length > 0) {

        for (let i = 0; i < tags.length; i++) {

            if (i === 0 && (component as TextComponentBuilder).iText === '') {
                let tag = tags[i]
                if (typeof tag === 'string') {
                    (component as TextComponentBuilder).iText = tag
                } else {
                    component = tag
                }
                continue
            }

            let tag = tags[i]
            if (typeof tag === 'string') {
                component.extra(new TextComponentBuilder(tag))
            } else {
                component.extra(tag)
            }

            if (!(strings[i + 1] === '' && i + 1 === strings.length - 1)) component.extra(new TextComponentBuilder(strings[i + 1]))
        }
    } else if (strings.length > 1) {
        const newStrings = [...strings]
            const first = newStrings.shift()
            if (first === '') {
                (component as TextComponentBuilder).iText = newStrings.shift()
            }
            for (let i = 0; i < newStrings.length; i++) {
                if (!(newStrings[i] === '' && i === newStrings.length - 1)) component.extra(new TextComponentBuilder(newStrings[i]))
            }
    }

    return component

}

export function cx(...formats: Formatter[]): Formatter {
    return (strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]) => {
        const component = c(strings, ...tags)
        for (const format of formats) {
            if (format === red) {
                component.red()
            } else if (format === blue) {
                component.blue()
            } else if (format === green) {
                component.green()
            } else if (format === yellow) {
                component.yellow()
            } else if (format === aqua) {
                component.aqua()
            } else if (format === gray) {
                component.gray()
            } else if (format === darkRed) {
                component.darkRed()
            } else if (format === darkBlue) {
                component.darkBlue()
            } else if (format === darkGreen) {
                component.darkGreen()
            } else if (format === darkAqua) {
                component.darkAqua()
            } else if (format === darkGray) {
                component.darkGray()
            } else if (format === black) {
                component.black()
            } else if (format === white) {
                component.white()
            } else if (format === gold) {
                component.gold()
            } else if (format === darkPurple) {
                component.darkPurple()
            } else if (format === lightPurple) {
                component.lightPurple()
            } else if (format === bold) {
                component.bold()
            } else if (format === italic) {
                component.italic()
            } else if (format === underlined) {
                component.underlined()
            } else if (format === strikethrough) {
                component.strikethrough()
            } else if (format === obfuscated) {
                component.obfuscated()
            } else if (format === reset) {
                component.reset()
            }
        }
        return component
    }
}

export function t(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return new TranslatableComponentBuilder(strings[0].trim()).with(...tags)
}

export function key(key: string): KeybindComponentBuilder {
    return new KeybindComponentBuilder(key)
}

export function sel(selector: string): SelectorComponentBuilder {
    return new SelectorComponentBuilder(selector)
}

export function score(name: string, objective: string, value?: string): ScoreComponentBuilder {
    const component = new ScoreComponentBuilder(name, objective)
    if (value != null) component.value(value)
    return component
}

export function red(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('red')
}

export function blue(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('blue')
}

export function green(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('green')
}

export function yellow(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('yellow')
}

export function aqua(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('aqua')
}

export function white(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('white')
}

export function black(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('black')
}

export function gray(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('gray')
}

export function darkRed(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('dark_red')
}

export function darkBlue(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('dark_blue')
}

export function darkGreen(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('dark_green')
}

export function darkAqua(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('dark_aqua')
}

export function darkGray(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('dark_gray')
}

export function darkPurple(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('dark_purple')
}

export function gold(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('gold')
}

export function lightPurple(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).color('light_purple')
}

export function color(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    const color = tags.shift()
    if (color == null || color instanceof ComponentBuilder) return c(strings, ...tags)
    return c(strings, ...tags).color(color as ChatColor)
}

export function bold(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).bold()
}

export function italic(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).italic()
}

export function underlined(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).underlined()
}

export function strikethrough(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).strikethrough()
}

export function obfuscated(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).obfuscated()
}

export function reset(strings: TemplateStringsArray, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    return c(strings, ...tags).reset()
}

function isTemplateStringsArray(input: unknown): asserts input is TemplateStringsArray {
    // please work
}

export function insert(strings: TemplateStringsArray, insertion: string, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    if (insertion == null) return c(strings, ...tags)
    else if (strings[0] === '' && strings[1].startsWith(' ')) {
        const strs = [...strings]
        strs[1] = strs[1].substring(1)
        strs.shift()
        ;(strs as any).raw = strings.raw
        isTemplateStringsArray(strs)
        return c(strs, ...tags).insertion(insertion)
    }
    return c(strings, ...tags).insertion(insertion)
}

export function link(strings: TemplateStringsArray, url: string, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    if (url == null) url = ''
    else if (strings[0] === '' && strings[1].startsWith(' ')) {
        const strs = [...strings]
        strs[1] = strs[1].substring(1)
        strs.shift()
        ;(strs as any).raw = strings.raw
        isTemplateStringsArray(strs)
        return c(strs, ...tags).clickEvent('open_url', url)
    }
    return c(strings, ...tags).clickEvent('open_url', url)
}

export function cmd(strings: TemplateStringsArray, command: string, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    if (command == null) command = ''
    else if (strings[0] === '' && strings[1].startsWith(' ')) {
        const strs = [...strings]
        strs[1] = strs[1].substring(1)
        strs.shift()
        ;(strs as any).raw = strings.raw
        isTemplateStringsArray(strs)
        return c(strs, ...tags).clickEvent('run_command', command)
    }
    return c(strings, ...tags).clickEvent('run_command', command)
}

export function suggest(strings: TemplateStringsArray, command: string, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    if (command == null) command = ''
    else if (strings[0] === '' && strings[1].startsWith(' ')) {
        const strs = [...strings]
        strs[1] = strs[1].substring(1)
        strs.shift()
        ;(strs as any).raw = strings.raw
        isTemplateStringsArray(strs)
        return c(strs, ...tags).clickEvent('suggest_command', command)
    }
    return c(strings, ...tags).clickEvent('suggest_command', command)
}

export function page(strings: TemplateStringsArray, index: number, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    if (index == null) index = 1
    else if (strings[0] === '' && strings[1].startsWith(' ')) {
        const strs = [...strings]
        strs[1] = strs[1].substring(1)
        strs.shift()
        ;(strs as any).raw = strings.raw
        isTemplateStringsArray(strs)
        return c(strs, ...tags).clickEvent('change_page', index)
    }
    return c(strings, ...tags).clickEvent('change_page', index)
}

export function copy(strings: TemplateStringsArray, text: string,  ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    if (text == null) text = ''
    else if (strings[0] === '' && strings[1].startsWith(' ')) {
        const strs = [...strings]
        strs[1] = strs[1].substring(1)
        strs.shift()
        ;(strs as any).raw = strings.raw
        isTemplateStringsArray(strs)
        return c(strs, ...tags).clickEvent('copy_to_clipboard', text)
    }
    return c(strings, ...tags).clickEvent('copy_to_clipboard', text)
}

export function twitch(strings: TemplateStringsArray, user: string, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    if (user == null) user = ''
    else if (strings[0] === '' && strings[1].startsWith(' ')) {
        const strs = [...strings]
        strs[1] = strs[1].substring(1)
        strs.shift()
        ;(strs as any).raw = strings.raw
        isTemplateStringsArray(strs)
        return c(strs, ...tags).clickEvent('twitch_user_info', user)
    }
    return c(strings, ...tags).clickEvent('twitch_user_info', user)
}

export function file(strings: TemplateStringsArray, path: string, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    if (path == null) path = ''
    else if (strings[0] === '' && strings[1].startsWith(' ')) {
        const strs = [...strings]
        strs[1] = strs[1].substring(1)
        strs.shift()
        ;(strs as any).raw = strings.raw
        isTemplateStringsArray(strs)
        return c(strs, ...tags).clickEvent('open_file', path)
    }
    return c(strings, ...tags).clickEvent('open_file', path)
}

export function hover(strings: TemplateStringsArray, text: string | ComponentBuilder, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    if (text == null) text = ''
    else if (strings[0] === '' && strings[1].startsWith(' ')) {
        const strs = [...strings]
        strs[1] = strs[1].substring(1)
        strs.shift()
        ;(strs as any).raw = strings.raw
        isTemplateStringsArray(strs)
        return c(strs, ...tags).hoverEvent('show_text', text)
    }
    return c(strings, ...tags).hoverEvent('show_text', text)
}

export function item(strings: TemplateStringsArray, item: string, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    if (item == null) item = ''
    else if (strings[0] === '' && strings[1].startsWith(' ')) {
        const strs = [...strings]
        strs[1] = strs[1].substring(1)
        strs.shift()
        ;(strs as any).raw = strings.raw
        isTemplateStringsArray(strs)
        return c(strs, ...tags).hoverEvent('show_item', item)
    }
    return c(strings, ...tags).hoverEvent('show_item', item)
}

export function entity(strings: TemplateStringsArray, entity: string, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    if (entity == null) entity = ''
    else if (strings[0] === '' && strings[1].startsWith(' ')) {
        const strs = [...strings]
        strs[1] = strs[1].substring(1)
        strs.shift()
        ;(strs as any).raw = strings.raw
        isTemplateStringsArray(strs)
        return c(strs, ...tags).hoverEvent('show_entity', entity)
    }
    return c(strings, ...tags).hoverEvent('show_entity', entity)
}

export function achievement(strings: TemplateStringsArray, achievement: string, ...tags: (string | ComponentBuilder)[]): ComponentBuilder {
    if (achievement == null) achievement = ''
    else if (strings[0] === '' && strings[1].startsWith(' ')) {
        const strs = [...strings]
        strs[1] = strs[1].substring(1)
        strs.shift()
        ;(strs as any).raw = strings.raw
        isTemplateStringsArray(strs)
        return c(strs, ...tags).hoverEvent('show_achievement', achievement)

    }
    return c(strings, ...tags).hoverEvent('show_achievement', achievement)
}