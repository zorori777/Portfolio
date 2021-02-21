import Link from 'next/link'
import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <div className={sharedStyles.layout}>
      <h1>ぽーとふぉりお</h1>
      <Header titlePre="Home" />
      <img
        src="/shisharLogo.jpg"
        height="85"
        width="250"
        alt="Vercel + Notion"
      />
    </div>
  </>
)
