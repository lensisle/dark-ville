import glamorous from 'glamorous'

const RoomContainer = glamorous.div({
  width: 640,
  height: 360
})

const RoomImage = glamorous.img({
  display: 'block',
  width: '100%',
  height: '100%'
})

const Room = ({ name }) => (
  <RoomContainer>
    <RoomImage src={`/static/${name}.png`} />
  </RoomContainer>
)

export default Room