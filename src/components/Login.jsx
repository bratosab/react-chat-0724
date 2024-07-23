import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../firebaseInstance"

export function Login() {
    const signIn = () => {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
    }

    return (
        <>
        <button onClick={signIn}>Sign In</button>
        </>
    )
}