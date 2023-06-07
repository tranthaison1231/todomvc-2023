export function delegate(el: HTMLElement, selector: string, event: any, handler: any) {
  el.addEventListener(event, e => {
    if (e.target.matches(selector)) handler(e, el)
  })
}
