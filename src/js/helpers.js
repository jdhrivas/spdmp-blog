export const isRTL = () => {
  const $html = document.querySelector('html')
  return ['ar', 'he', 'fa'].includes($html.getAttribute('lang'))
}

export const isMobile = () => {
  return window.matchMedia('(max-width: 767px)').matches
}

export const toggleScrollVertical = () => {
  const $body = document.querySelector('body')
  $body.classList.toggle('no-scroll-y')
}

export const formatDate = (date) => {
  if (date) {
    return new Date(date).toLocaleDateString(
      document.documentElement.lang,
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    )
  }

  return ''
}

export const getParameterByName = (name, url) => {
  if (!url) url = window.location.href

  name = name.replace(/[\[\]]/g, '\\$&')

  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`)
  const results = regex.exec(url)

  if (!results) return null

  if (!results[2]) return ''

  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export const makeImagesZoomable = ($, mediumZoom) => {
  const zoom = mediumZoom('.js-zoomable')

  zoom.on('opened', () => {
    setTimeout(() => {
      const $mediumZoomImages = $('.medium-zoom-image--opened')
      if ($mediumZoomImages.length > 1) {
        $mediumZoomImages.last().hide()
      }
    }, 10)
  })
}
