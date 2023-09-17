// const redirectUrl = () => {
//     const redirectUri = 'http://127.0.0.1:3000/authorized&code_challenge=QYPAZ5NU8yvtlQ9erXrUYR-T5AGCjCF47vN-KsaI2A8&code_challenge_method=S256';
//     return `http://localhost:8080/oauth2/authorize?response_type=code&client_id=client&scope=openid&redirect_uri=${redirectUri}`;
// }

const redirectUrl = () => {
    const redirectUri = 'http://localhost:3000/authorized';
    const clientID="446969406485-c4rqf035se27h2q34n9upkbs7vbg83du.apps.googleusercontent.com";
    return `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${clientID}&scope=openid&redirect_uri=${redirectUri}`;
}

export { redirectUrl };