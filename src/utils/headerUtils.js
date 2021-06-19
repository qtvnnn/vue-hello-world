function initHeaderAndLeftMenuEl () {
  return {
    overlayCommonEl: document.getElementById('overlay-common'),
    leftMenuEl: document.getElementById('left-menu')
  }
}

function addLeftMenuAndOverLayClass () {
  // eslint-disable-next-line new-cap
  let $headerAndLeftMenuEl = new initHeaderAndLeftMenuEl()
  $headerAndLeftMenuEl.overlayCommonEl.style.display = 'block'
  $headerAndLeftMenuEl.leftMenuEl.classList.add('tab-menu-show')
}

function removeLeftMenuAndOverlayClass () {
  // eslint-disable-next-line new-cap
  let $headerAndLeftMenuEl = new initHeaderAndLeftMenuEl()
  $headerAndLeftMenuEl.overlayCommonEl.style.display = 'none'
  $headerAndLeftMenuEl.leftMenuEl.classList.remove('tab-menu-show')
}

export { addLeftMenuAndOverLayClass, removeLeftMenuAndOverlayClass }
