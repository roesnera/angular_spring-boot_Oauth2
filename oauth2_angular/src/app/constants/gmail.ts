// const gmail = () => {
//     return 'https://www.googleapis.com/auth/userinfo.email';
// }

const gmail = (token: string) => {
    return `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`;
}


export { gmail }