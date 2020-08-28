declare global {
  interface Window {
    Intercom: (event: string, options?: Record<string, unknown>) => void
    intercomSettings: Record<string, unknown>
  }
}

const loadIntercom = (settings) => {
  if (!window.Intercom) {
    ;((w, d, id, s, _x) => {
      function i() {
        // eslint-disable-next-line prefer-rest-params
        i.c(arguments)
      }
      i.q = []
      i.c = (args) => {
        i.q.push(args)
      }
      w.Intercom = i
      s = d.createElement("script")
      s.async = 1
      s.src = "https://widget.intercom.io/widget/" + id
      d.head.appendChild(s)
    })(window, document, settings.app_id)
  }

  window.intercomSettings = settings
}

export const bootIntercom = (settings, { onOpen, onClose }) => {
  loadIntercom(settings)
  window.Intercom("boot", settings)

  window.Intercom("onShow", onOpen)
  window.Intercom("onHide", onClose)
}
