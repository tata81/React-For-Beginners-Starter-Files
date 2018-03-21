import Rebase from 're-base';
import firebase from 'firebase';

const fireBaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyCkYpuq8k-e9Pti3eHeRC5-ZPWE1XiVm98",
    authDomain: "react-practice-1-srinath.firebaseapp.com",
    databaseURL: "https://react-practice-1-srinath.firebaseio.com",
});

const base = Rebase.createClass(fireBaseApp.database());

export { fireBaseApp };

export default base;