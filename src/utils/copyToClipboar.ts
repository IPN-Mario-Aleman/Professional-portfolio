interface ICopy {
    text: string
}

export function CopyToClipboard ({ text }: ICopy) {
  // Copy the text inside the text field
  navigator.clipboard.writeText(text)
}
