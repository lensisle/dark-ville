import Layout from '../components/layout'
import Game from '../components/game'

class Index extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <Layout>
        <Game>
          <Game.Menu css={{ gridArea: 'menu' }} />
          <Game.Screen css={{ gridArea: 'screen' }} />
          <Game.Description css={{ gridArea: 'desc' }} />
        </Game>
      </Layout>
    )
  }
}

export default Index