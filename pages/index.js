import Layout from '../components/layout';

import Menu from '../components/menu';
import Screen from '../components/screen';
import Description from '../components/description';

export default () => (
  <Layout>
    <Menu css={{ gridArea: 'menu' }}>Menu</Menu>
    <Screen css={{ gridArea: 'screen' }} />
    <Description css={{ gridArea: 'desc' }}>Description</Description>
  </Layout>
)