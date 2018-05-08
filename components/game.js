import Menu from './menu'
import Screen from './screen'
import Description from './description'

export default class extends React.Component {
  static Menu = Menu
  static Screen = Screen
  static Description = Description

  state = {
    activeRoom: 'room1A'
  }

  render() {
    const {
      activeRoom
    } = this.state

    const children = React.Children.map(
      this.props.children,
      child => React.cloneElement(child, {
        activeRoom
      })
    )

    return <div>{ children }</div>
  }
}