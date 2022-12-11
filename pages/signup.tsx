import Layout from '../src/components/Layout'
import Signup from '../src/components/Signup'

export default function SignUp() {
  return (
    <Layout title="BrainBattle | SignUp">
      <div style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Signup />
      </div>
    </Layout>
  )
}
