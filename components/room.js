import glamorous from 'glamorous'

import ImgAreas from './imgareas';
import { hover } from 'glamor';

const RoomContainer = glamorous.div({
  
})

const RoomImage = glamorous.img({
  display: 'block',
  width: 640,
  height: 360
})

const Room = ({ asset }) => (
  <RoomContainer>
    <ImgAreas
      areas={[
        {
          id: 'rect-1',
          points: [276, 275, 276, 88, 380, 88, 380, 277]
        },
        {
          id: 'rect-2',
          points: [275, 276, 276, 190, 381, 189, 380, 276],
        }
      ]}
      render={({ mouseX, mouseY, iniX, iniY, hovered }) => {
        return(
          <div>
            <RoomImage src={`/static/${asset}.png`} />
          </div>
        )
      }}
    />
  </RoomContainer>
)

export default Room