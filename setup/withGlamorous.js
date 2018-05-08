import { rehydrate, css } from 'glamor'
import glamorous from 'glamorous'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

export default (Component) => (props) => {

  css.global('html, body', { margin: 0, padding: 0, background: '#1B151C' })


  return <Component {...props} />
}