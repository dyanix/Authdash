import Login from "../pages/login";
import { useSession, signIn, getSession } from "next-auth/react"
import Dashboard from "../pages/dashboard";

export default function SignIn() {
  const { data: session } = useSession()

  const handleSignIn = () => {
    signIn()
  }


  return (
    <>
      {session ? (
        <div>
        <Dashboard/>     
        </div>
      ) : (      
        <Login onSignIn={handleSignIn} />      
      )}
   </>
  );
}


export async function getServerSideProps({req}){
  const session = await getSession({req})
if(!session){
  return{
    redirect:{
      destination:'/login',
      permanent:false
    }
}
}
  return{
    props:{session}
  }
}