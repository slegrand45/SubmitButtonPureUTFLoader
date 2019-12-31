function f() {
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
}

function ready(f) {
  if (document.readyState != 'loading'){
    f();
  } else {
    document.addEventListener('DOMContentLoaded', f);
  }
}

ready(f)
