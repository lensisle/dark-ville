import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

/// taken from https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html
/// props to W. Randolph Franklin
const pnpoly = (nvert, vertx, verty, testx, testy) => {
  let i, j = 0;
  let c = false;

  for (i = 0, j = nvert-1; i < nvert; j = i++) {
    if ( ((verty[i]>testy) != (verty[j]>testy)) && (testx < (vertx[j]-vertx[i]) * (testy-verty[i]) / (verty[j]-verty[i]) + vertx[i]) ) {
      c = !c;
    }   
  }

  return c;
}

export default class ImgAreas extends React.Component {
  state = {
    hovered: [],
    mouseX: 0,
    mouseY: 0,
    iniX: 0,
    iniY: 0,
    areas: []
  }

  static propTypes = {
    
  }

  constructor(props) {
    super(props)
  }

  handleMouseMove = (event) => {
    const { x, y } = event

    const { areas } = this.state

    const nx = x - this.state.iniX
    const ny = y - this.state.iniY

    let hovered = areas.filter (({ xs, ys }) => pnpoly(xs.length, xs, ys, nx, ny))

    this.setState({
      mouseX: nx,
      mouseY: ny,
      hovered
    })
  }

  handleOnResize = () => {
    const { top, left } = this.node.getBoundingClientRect()
    this.setState({
      iniX: Math.floor(left),
      iniY: Math.floor(top)
    })
  }

  componentDidMount() {
    const { areas: areasData } = this.props

    const areas = []
    areasData.forEach (({ id, points }) => areas.push({
      id,
      xs: points.filter((n, i) => i % 2 === 0),
      ys: points.filter((n, i) => i % 2 !== 0)
    }))

    this.node = ReactDOM.findDOMNode(this)

    this.node.onmousemove = this.handleMouseMove
    
    if (window) {
      window.addEventListener("resize", this.handleOnResize);
    }

    const { top, left } = this.node.getBoundingClientRect()

    this.setState({
      iniX: Math.floor(left),
      iniY: Math.floor(top),
      areas
    })
  }

  componentWillUnmount() {
    this.node.onmousemove = null
    if (window) {
      window.removeEventListener("resize", this.handleOnResize);
    }
  }

  render() {
    return this.props.render(this.state)
  }
}