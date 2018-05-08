import withGlamorous from '../setup/withGlamorous';

import glamorous from 'glamorous'

const Layout = glamorous.div({
  background: 'white',
  color: 'black',
  margin: 'auto',
  width: 640,
  height: 360,
  marginTop: '10%',
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 0,
    gridTemplateAreas: `
      "menu menu menu"
      ".... screen ...."
      "desc desc desc"
    `
  }
})

export default withGlamorous(Layout)