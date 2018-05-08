import glamorous from 'glamorous'

const RoomContainer = glamorous.div({
  
})

const RoomImage = glamorous.img({
  display: 'block',
  width: 640,
  height: 360
})

const Room = ({ asset }) => (
  <RoomContainer>
    <RoomImage src={`/static/${asset}.png`} />
  </RoomContainer>
)

export default Room