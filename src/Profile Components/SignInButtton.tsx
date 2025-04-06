import { signInWithPopup } from "firebase/auth"
import { SignedIn } from "../Components/Context/SignedInContext"
import { auth, provider } from "../Configs/FirebaseConfig"
 




const SignInButtton = () => {

    const handleGoogleSignIn =async() =>{

        try{
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            SignedIn.
        }

    }



  return (
    <div>
      
    </div>
  )
  
}

export default SignInButtton
