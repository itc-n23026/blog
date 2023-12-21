import Layout from 'components/layout'
import '@/styles/globals.css'

// Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome-svg-core'
config.autoAddCss = false

function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
