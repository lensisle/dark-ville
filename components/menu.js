import glamorous from 'glamorous'

const MenuStyle = glamorous.div({
  background: 'red'
})

const Menu = ({ activeRoom }) => {

  return <MenuStyle>Current Room: { activeRoom }</MenuStyle>

}

export default Menu