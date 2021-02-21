import Link from 'next/link'
import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <div className={sharedStyles.layout}>
      <img
        src="/shishaLogoBlack.jpg"
        height="85"
        width="250"
        alt="Vercel + Notion"
      />
      <h1>ぽーとふぉりお</h1>
      <Header titlePre="Home" />
    </div>
  </>
)
