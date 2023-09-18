const gmailDrafts = (token: string, id: string) => {
    const finalUrl = `https://www.gmail.googleapis.com/gmail/v1/users/${id}/profile?access_token=${token}`;
    return finalUrl;
}

export {gmailDrafts};