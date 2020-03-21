export function hasShadowDom(element: HTMLElement): element is HTMLElement & { readonly shadowRoot: ShadowRoot; } {
  return !!element.shadowRoot && 'attachShadow' in element;
}
