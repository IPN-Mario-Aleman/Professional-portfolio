export type I18NContextType = {
    t: (key: string, ...args: string[]) => void
}

export interface Language {
    es: {
        Title: string,
        Description: string
    },
    en: {
        Title: string,
        Description: string
    }
}

export type t = {
    [key: string]: any
}
