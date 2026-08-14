/* ==========================================================================
   Kĩ Thuật Biểu Diễn — Hát Bội
   Vanilla behaviour layer. No framework, no build step.
   ========================================================================== */
(function () {
  'use strict'

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  /* ------------------------------------------------------------------------
     Hero parallax: the geometric pattern drifts at 30% of scroll speed
     ------------------------------------------------------------------------ */
  var heroPattern = document.getElementById('hero-pattern')

  if (heroPattern && !reduceMotion) {
    var ticking = false

    var drawParallax = function () {
      heroPattern.style.transform = 'translateY(' + window.scrollY * 0.3 + 'px)'
      ticking = false
    }

    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          ticking = true
          window.requestAnimationFrame(drawParallax)
        }
      },
      { passive: true }
    )
  }

  /* ------------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------------ */
  var revealables = document.querySelectorAll('.reveal')

  if (!('IntersectionObserver' in window) || reduceMotion) {
    // No observer support (or motion is unwelcome) — show everything up front.
    revealables.forEach(function (el) {
      el.classList.add('is-visible')
    })
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    revealables.forEach(function (el) {
      observer.observe(el)
    })
  }

  /* ------------------------------------------------------------------------
     Accordions — one panel open at a time within each group
     ------------------------------------------------------------------------ */
  document.querySelectorAll('[data-accordion]').forEach(function (group) {
    var triggers = Array.prototype.slice.call(group.querySelectorAll('.accordion__trigger'))

    var close = function (trigger) {
      var panel = trigger.nextElementSibling
      trigger.setAttribute('aria-expanded', 'false')
      panel.style.maxHeight = '0px'
      panel.style.opacity = '0'
    }

    var open = function (trigger) {
      var panel = trigger.nextElementSibling
      trigger.setAttribute('aria-expanded', 'true')
      panel.style.maxHeight = panel.scrollHeight + 'px'
      panel.style.opacity = '1'
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var wasOpen = trigger.getAttribute('aria-expanded') === 'true'
        triggers.forEach(close)
        if (!wasOpen) open(trigger)
      })
    })

    // Panels sized in px need re-measuring when the layout reflows.
    window.addEventListener('resize', function () {
      triggers.forEach(function (trigger) {
        if (trigger.getAttribute('aria-expanded') === 'true') {
          var panel = trigger.nextElementSibling
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      })
    })
  })

  /* ------------------------------------------------------------------------
     Tabs
     ------------------------------------------------------------------------ */
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var tabs = Array.prototype.slice.call(group.querySelectorAll('[role="tab"]'))

    var select = function (tab, focus) {
      tabs.forEach(function (other) {
        var selected = other === tab
        other.setAttribute('aria-selected', String(selected))
        other.tabIndex = selected ? 0 : -1

        var panel = document.getElementById(other.getAttribute('aria-controls'))
        if (panel) panel.hidden = !selected
      })
      if (focus) tab.focus()
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        select(tab, false)
      })

      tab.addEventListener('keydown', function (event) {
        var next = null
        if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length]
        else if (event.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length]
        else if (event.key === 'Home') next = tabs[0]
        else if (event.key === 'End') next = tabs[tabs.length - 1]

        if (next) {
          event.preventDefault()
          select(next, true)
        }
      })
    })
  })
})()
