import initial from '@/common/initial'

export default {
  setContainerClasses: async (state, payload) => {
    state.containerClasses = payload
  },
  setShowNavbar: async (state, payload) => {
    state.showNavbar = payload
  },
  setOption: async (state, payload) => {
    for (let i in payload) {
      if (payload[i] !== null) {
        if (typeof payload[i] !== 'string') {
          state.options[i] = payload[i]
        } else if (payload[i].length > 0) {
          state.options[i] = payload[i]
        }
      }
    }
  },
  setWidget: async (state, payload) => {
    for (let i in payload) {
      if (payload[i] !== null) {
        state.widgets[i] = payload[i]
      }
    }
  },
  setToken: async (state, payload) => {
    state.token = payload
  },
  setMe: async (state, me) => {
    state.me = await Object.assign({}, initial.me, me)
  },
  setPrivileges: async (state, privileges) => {
    state.privileges = privileges
  },
  setBreadcrumbs: async (context, items) => {
    context.breadcrumbs = [...items]
  },
  setErrors: async (context, errors) => {
    for (let i = 0; i < errors.length; i++) {
      await context.errors.push(errors[i])
    }
  },
  setTitle: async (context, title) => {
    window.document.title = title
  },
  setDescription: async (context, content) => {
    window.document.querySelector('[viloveul-controlled-description]').map(el => {
      el.parentNode.removeChild(el)
    })

    let description = document.createElement('meta')
    description.setAttribute('name', 'description')
    description.setAttribute('content', content)
    description.setAttribute('viloveul-controlled-description', '')
    window.document.head.appendChild(description)

    let ogdescription = document.createElement('meta')
    ogdescription.setAttribute('property', 'og:description')
    ogdescription.setAttribute('content', content)
    ogdescription.setAttribute('viloveul-controlled-description', '')
    window.document.head.appendChild(ogdescription)
  },
  setRedirection: async (context, path) => {
    context.redirect = path
  }
}
