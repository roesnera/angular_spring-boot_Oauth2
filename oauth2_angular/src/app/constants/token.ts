// const tokenUrl = (code: string) => {
//     const url = `redirect_uri=http://127.0.0.1:3000/authorized&grant_type=authorization_code&code=${code}&code_verifier=qPsH306-ZDDaOE8DFzVn05TkN3ZZoVmI_6x4LsVglQI`;
//     return `http://localhost:8080/oauth2/token?client_id=client&${url}`;
// }

const tokenUrl = (code: string) => {
    const url = `redirect_uri=http://127.0.0.1:3000/authorized&code=${code}`;
    const clientId = `a92e3a6821d6ff00f16b`;
    const clientSecret = `079f9ef8fa281b1acd8b8d444354463910cb50b6`;
    return `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&${url}`;
}

export { tokenUrl };