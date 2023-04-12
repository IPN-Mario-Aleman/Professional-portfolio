export interface Tabs {
    icon: string;
    label: string;
}

export const allInformation = [
  { icon: '💻', label: 'About Me' },
  { icon: '📱', label: 'Contact Me' }
]

const [about, contact] = allInformation
export const initialTabs = [about, contact]

export function getNextIngredient (
  info: Tabs[]
): Tabs | undefined {
  const existing = new Set(info)
  return allInformation.find((info) => !existing.has(info))
}
