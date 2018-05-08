import glamorous from 'glamorous'

const GlamMenu = glamorous.div({
  background: 'red'
})

const Menu = ({ activeRoom }) => {

  return <GlamMenu>Current Room: { activeRoom }</GlamMenu>

}

export default Menu