import type { NextPage } from 'next'
import LeftSide from '../components/leftSide'
import Page from '../components/page'

const Home: NextPage = () => {
  return (
    <>
      <a href="/api/pdf" download="generated_pdf.pdf" className="downloadBtn">Download PDF</a>
      <Page>
        <LeftSide />
      </Page>
    </>
  )
}

export default Home