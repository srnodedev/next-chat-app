import Layout from '../app/components/layout'
import Signup from '../app/components/signup'

export default function SignUp() {
  return (
    <Layout title="BrainBattle | SignUp">
      <div style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Signup />
      </div>
    </Layout>
  )
}
