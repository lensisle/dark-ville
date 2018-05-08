import Layout from '../components/layout';
import Game from '../components/game';

export default () => (
  <Layout>
    <Game>
      <Game.Menu css={{ gridArea: 'menu' }}>Menu</Game.Menu>
      <Game.Screen css={{ gridArea: 'screen' }} />
      <Game.Description css={{ gridArea: 'desc' }}>Description</Game.Description>
    </Game>
  </Layout>
)