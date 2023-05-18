// import "../styles/global.css";
import '@/global.css'
// import { styles } from '@/styles/customStyles';
import LayoutWrapper from '@/components/LayoutWrapper';
const  App =({ Component, pageProps }) => {
    return  <LayoutWrapper>
    <Component {...pageProps} />
  </LayoutWrapper>;
}

export default App