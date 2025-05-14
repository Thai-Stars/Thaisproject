import {auth} from "../config/firebase"
import {creatUserWithEmailAndPassword, signInWithEmailAndPassword,signOut} from "firbase/auth";
import React, {useState} from "react";

function Auth(){
    const [email,setEmail] = usesState("");

    console.log(auth?.currentUser?.email)

    async function signUp(){
        try {
            await creatUserWithEmailAndPassword(auth,email,password)

        }
        catch(err){
            alert(err)
        }
    };
    async function SignIn(){
        try{
            await creatUserWithEmailAndPassword(auth,email,password)

        }
        catch(err){
            alert(err)

        };
    }
    async function logout() {
        try {
            await signOut(auth);

        } catch(err) {
            console.error(err);
        }
        
    }
        return(
            <div>
                <input placeholder="Username.." onChange={(e) => setEmail(e.target.value)}></input>
                <input placeholder="Password.." onChange={(e) => Setpassword(e.target.value)}></input>

                <button onClick={signUp}>Create Account</button>
                <button onClick={signIn}>Sign In</button>
                <button onClick={logout}>Sign Out</button>
            </div>
        )
        
        }

export default Auth;