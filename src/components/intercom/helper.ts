declare global {
  interface Window {
    Intercom: ((event: string, options?: object) => void) & { booted: boolean }
    intercomSettings: object
  }
}

const loadIntercom = settings => {
  if (!window.Intercom) {
    ;((w, d, id, s, _x) => {
      function i() {
        i.c(arguments)
      }
      i.q = []
      i.c = args => {
        i.q.push(args)
      }
      i.booted = false
      w.Intercom = i
      s = d.createElement("script")
      s.async = 1
      s.src = "https://widget.intercom.io/widget/" + id
      d.head.appendChild(s)
    })(window, document, settings.app_id)
  }

  window.intercomSettings = settings
}

const waitForIntercomLoad = callback => {
  const timeout = setTimeout(() => clearInterval(interval), 30000)
  const interval = setInterval(() => {
    if (window.Intercom.booted) {
      clearInterval(interval)
      clearTimeout(timeout)
      callback()
    }
  }, 100)
}

export const bootIntercom = (settings, { onLoad, onOpen, onClose }) => {
  loadIntercom(settings)
  window.Intercom("boot", settings)

  waitForIntercomLoad(onLoad)
  window.Intercom("onShow", onOpen)
  window.Intercom("onHide", onClose)
}
