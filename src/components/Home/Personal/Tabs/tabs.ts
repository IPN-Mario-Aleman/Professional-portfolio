export interface Tabs {
    icon: string;
    label: string;
}

export const allIngredients = [
  { icon: '🍅', label: 'About Me' },
  { icon: '🥬', label: 'Contact Me' }
]

const [tomato, lettuce] = allIngredients
export const initialTabs = [tomato, lettuce]

export function getNextIngredient (
  ingredients: Tabs[]
): Tabs | undefined {
  const existing = new Set(ingredients)
  return allIngredients.find((ingredient) => !existing.has(ingredient))
}
