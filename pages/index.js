import withGlamorous from '../setup/withGlamorous';
import Layout from '../components/layout';
import App from '../components/app';

const Wrapper = withGlamorous(Layout);

export default () => <Wrapper><App /></Wrapper>