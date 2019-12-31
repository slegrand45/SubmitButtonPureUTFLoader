
class SubmitButtonPureUTFLoader3Circles {

	getButtonClassName() {
    return 'submit-button-pure-utf-loader-3circles'
  }

  getAnimationHTML() {
  	return '<span>\u25CF</span><span>\u25CF</span><span>\u25CF</span>'
  }

}

class SubmitButtonPureUTFLoader3Squares {
	
	getButtonClassName() {
    return 'submit-button-pure-utf-loader-3squares'
  }

  getAnimationHTML() {
  	return '<span>\u25FC</span><span>\u25FC</span><span>\u25FC</span>'
  }

}

class SubmitButtonPureUTFLoaderLeftToRightRectangle {
	
	getButtonClassName() {
    return 'submit-button-pure-utf-loader-l2r-rectangle'
  }

  getAnimationHTML() {
  	return '<span>\u25AC</span>'
  }

}

class SubmitButtonPureUTFLoaderDiamonds {
	
	getButtonClassName() {
    return 'submit-button-pure-utf-loader-diamonds'
  }

  getAnimationHTML() {
  	return '<span>\u25C7</span><span>\u25C7</span><span>\u25C8</span><span>\u25C7</span><span>\u25C7</span>'
  }

}

class SubmitButtonPureUTFLoader3SpanElements {

	constructor(loaderStyle) {
    this._loaderStyle = loaderStyle
  }

  getCSS() {
  	const loaderStyle = this._loaderStyle
  	return `
    button.${ loaderStyle.getButtonClassName() } span:nth-child(2) {
      margin-left: 20%;
      margin-right: 20%;
    }

    button.${ loaderStyle.getButtonClassName() } span.animation {      
      animation-name: ${ loaderStyle.getButtonClassName() }-keyframes-pulse;
      animation-duration: 0.9s;   
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
    }

    button.${ loaderStyle.getButtonClassName() } span.animation2 {
      animation-delay: 0.3s;
    }

    button.${ loaderStyle.getButtonClassName() } span.animation3 {
      animation-delay: 0.6s;
    }

    @keyframes ${ loaderStyle.getButtonClassName() }-keyframes-pulse {
      0.1% {
        opacity: 10%;
      }
      99.9% {
        opacity: 100%;
      }
    }

    `
  }

  startAnimation(bt) {
  	bt.querySelectorAll('span').forEach(e => e.classList.add('animation'))
    bt.querySelector('span:nth-child(2)').classList.add('animation2')
    bt.querySelector('span:nth-child(3)').classList.add('animation3')
  }
  
  stopAnimation(bt) {
  	bt.querySelectorAll('span').forEach(e => e.classList.remove('animation'))
    bt.querySelector('span:nth-child(2)').classList.remove('animation2')
    bt.querySelector('span:nth-child(3)').classList.remove('animation3')
  }

}

class SubmitButtonPureUTFLoaderLeftToRight {

	constructor(loaderStyle) {
    this._loaderStyle = loaderStyle
  }

  getCSS() {
  	const loaderStyle = this._loaderStyle
  	return `
    button.${ loaderStyle.getButtonClassName() } span.animation {
      animation-name: ${ loaderStyle.getButtonClassName() }-keyframes-l2r;
      animation-duration: 1.5s;   
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
    }

    @keyframes ${ loaderStyle.getButtonClassName() }-keyframes-l2r {
      0% {
        margin-left: -90%;
      }
      50% {
        margin-left: 90%;
      }
      100% {
        margin-left: -90%;
      }
    }

    `
  }

  startAnimation(bt) {
  	bt.querySelectorAll('span').forEach(e => e.classList.add('animation'))
  }
  
  stopAnimation(bt) {
  	bt.querySelectorAll('span').forEach(e => e.classList.remove('animation'))
  }

}

class SubmitButtonPureUTFLoader212SpanElements {

	constructor(loaderStyle) {
    this._loaderStyle = loaderStyle
  }

  getCSS() {
  	const loaderStyle = this._loaderStyle
  	return `
    button.${ loaderStyle.getButtonClassName() } span:nth-child(2),
    button.${ loaderStyle.getButtonClassName() } span:nth-child(4) {
      margin-left: 5%;
      margin-right: 5%;
    }

    button.${ loaderStyle.getButtonClassName() } span.animation {
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
      animation-duration: 0.9s;
    }

    button.${ loaderStyle.getButtonClassName() } span.animation1 {
      animation-name: ${ loaderStyle.getButtonClassName() }-keyframes-pulse-from-center1;
    }

    button.${ loaderStyle.getButtonClassName() } span.animation2 {
      animation-name: ${ loaderStyle.getButtonClassName() }-keyframes-pulse-from-center2;
    }

    button.${ loaderStyle.getButtonClassName() } span.animation3 {
      animation-name: ${ loaderStyle.getButtonClassName() }-keyframes-pulse-from-center3;
    }

    @keyframes ${ loaderStyle.getButtonClassName() }-keyframes-pulse-from-center1 {
      0% {
        opacity: 100%;
      }
      33% {
        opacity: 0%;
      }
      100% {
        opacity: 0%;
      }
    }

    @keyframes ${ loaderStyle.getButtonClassName() }-keyframes-pulse-from-center2 {
      0% {
        opacity: 0%;
      }
      33% {
        opacity: 0%;
      }
      33.3% {
        opacity: 100%;
      }
      66% {
        opacity: 0%;
      }
      100% {
        opacity: 0%;
      }
    }

    @keyframes ${ loaderStyle.getButtonClassName() }-keyframes-pulse-from-center3 {
      0% {
        opacity: 0%;
      }
      66% {
        opacity: 0%;
      }
      66.6% {
        opacity: 100%;
      }
      100% {
        opacity: 0%;
      }
    }

    `
  }

  startAnimation(bt) {
  	bt.querySelectorAll('span').forEach(e => e.classList.add('animation'))
    bt.querySelector('span:nth-child(3)').classList.add('animation1')
    bt.querySelector('span:nth-child(2)').classList.add('animation2')
    bt.querySelector('span:nth-child(4)').classList.add('animation2')
    bt.querySelector('span:nth-child(1)').classList.add('animation3')
    bt.querySelector('span:nth-child(5)').classList.add('animation3')
  }
  
  stopAnimation(bt) {
  	bt.querySelectorAll('span').forEach(e => e.classList.remove('animation'))
    bt.querySelector('span:nth-child(3)').classList.remove('animation1')
    bt.querySelector('span:nth-child(2)').classList.remove('animation2')
    bt.querySelector('span:nth-child(4)').classList.remove('animation2')
    bt.querySelector('span:nth-child(1)').classList.remove('animation3')
    bt.querySelector('span:nth-child(5)').classList.remove('animation3')
  }

}

class SubmitButtonPureUTFLoader extends HTMLElement {

	constructor() {
		super()
    const	innerHTML = this.innerHTML
    this.innerHTML = ''
    this.setUseShadowRoot()
    this.setLoaderStyle()
    this.setObjStyle(this.getLoaderStyle())    
    this.setObjAnimation(this.getLoaderStyle(), this.getObjStyle())
    this.setTemplate(document.createElement('template'))
    this.setTemplateHTML(`<button class="${ this.getObjStyle().getButtonClassName() }" type="submit">${ innerHTML }</button>`)
    if (this.useShadowRoot()) {
    	this.setRoot(this.attachShadow({ mode: 'open' }))
    }
    this.setStyle(document.createElement('style'))
    const css = `${ this.prependCSS() }
    ${ this.getObjAnimation().getCSS() }
    ${ this.appendCSS() }`
    this.setCSS(css)
    this.getRoot().appendChild(this.getStyle())
    this.getRoot().appendChild(this.getTemplate().content.cloneNode(true))
  }

  prependCSS() {
  	return ''
  }
  
  appendCSS() {
  	return ''
  }

  setUseShadowRoot() {
  	this._useShadowRoot = null
    if (this.hasAttribute('use-shadow-root')) {
    	this._useShadowRoot = this.getAttribute('use-shadow-root')
    }
  }

  useShadowRoot() {
    const v = this._useShadowRoot
    return (v === '1' || v === 'true' || v === 'use-shadow-root')
  }

  setLoaderStyle() {
  	this._loaderStyle = null
    if (this.hasAttribute('loader-style')) {
    	this._loaderStyle = this.getAttribute('loader-style')
    }
  }

  getLoaderStyle() {
  	return this._loaderStyle
  }

  setObjStyle(loaderStyle) {
  	switch(loaderStyle) {
      case '3circles':
      this._objStyle = new SubmitButtonPureUTFLoader3Circles()
      break
      case '3squares':
      this._objStyle = new SubmitButtonPureUTFLoader3Squares()
      break
      case 'l2r-rectangle':
      this._objStyle = new SubmitButtonPureUTFLoaderLeftToRightRectangle()
      break
      case 'diamonds':
      this._objStyle = new SubmitButtonPureUTFLoaderDiamonds()
      break
      default:
      this._objStyle = null
    }
  }
  
  getObjStyle() {
  	return this._objStyle
  }

  setObjAnimation(loaderStyle, objStyle) {
  	switch(loaderStyle) {
      case '3circles':
      this._objAnimation = new SubmitButtonPureUTFLoader3SpanElements(objStyle)
      break
      case '3squares':
      this._objAnimation = new SubmitButtonPureUTFLoader3SpanElements(objStyle)
      break
      case 'l2r-rectangle':
      this._objAnimation = new SubmitButtonPureUTFLoaderLeftToRight(objStyle)
      break
      case 'diamonds':
      this._objAnimation = new SubmitButtonPureUTFLoader212SpanElements(objStyle)
      break
      default:
      this._objAnimation = null
    }
  }
  
  getObjAnimation() {
  	return this._objAnimation
  }

  setTemplate(v) {
  	this._template = v
  }
  
  getTemplate() {
  	return this._template
  }

  setTemplateHTML(v) {
  	this.getTemplate().innerHTML = v
  }
  
  getTemplateHTML() {
  	return this.getTemplate().innerHTML
  }

  setStyle(v) {
    this._style = v
  }
  
  getStyle() {
    return this._style
  }
  
  setCSS(v) {
  	this._style.textContent = v
  }
  
  setRoot(v) {
  	this._shadowRoot = v
  }

  getRoot() {
  	if (this.useShadowRoot()) {
      return this._shadowRoot
    }
    return this
  }

  getButton() {
  	return this.getRoot().querySelector('button')
  }

  setButtonHTML(v) {
  	this.getButton().innerHTML = v
  }
  
  getButtonHTML() {
  	return this.getButton().innerHTML
  }
  
  getWidth() {
  	return this.getButton().offsetWidth
  }
  
  setWidth(v) {
  	this.getButton().style.width = v
  }
  
  getHeight() {
  	return this.getButton().offsetHeight
  }
  
  setHeight(v) {
  	this.getButton().style.height = v
  }

  disable() {
  	this.getButton().disabled = true
  }
  
  enable() {
  	this.getButton().disabled = false
  }

  start() {
    const htmlCircles = this.getObjStyle().getAnimationHTML()
    ,		oldWidth = this.getWidth()
    ,		oldHeight = this.getHeight()
    ,		oldHTML = this.getButtonHTML()
    this.disable()
    this.setButtonHTML(htmlCircles)
    this.setWidth(oldWidth + 'px')
    this.setHeight(oldHeight + 'px')
    this.getObjAnimation().startAnimation(this.getButton())
    const f = () => {
    	this.getObjAnimation().stopAnimation(this.getButton())
      this.setButtonHTML(oldHTML)
      this.setWidth(oldWidth + 'px')
      this.setHeight(oldHeight + 'px')
      this.enable()
    }
    return f
  }

}

/*
customElements.define('submit-button-pure-utf-loader', SubmitButtonPureUTFLoader)
const start = (evt) => {
	evt.preventDefault()
	const l = []
  ,		form = evt.currentTarget
  ,		btPush = document.getElementById('push')
  btPush.innerHTML = 'CLICK HERE TO STOP'
  document.querySelectorAll('submit-button-pure-utf-loader').forEach(bt => {
  	const	stop = bt.start()		
    l.push(stop)      
  })
  form.onsubmit = stop(l)
}
, stop = (l) => (evt) => {
	evt.preventDefault()
  l.forEach(f => f())
  const form = evt.currentTarget
  ,		btPush = document.getElementById('push')
  btPush.innerHTML = 'PUSH THIS BUTTON TO START'
  form.onsubmit = start
}
document.querySelector('form').onsubmit = start
*/
