type Credentials = {
    email: string;
    password: string;
    role?: string;
}

 const validUser: Credentials = {
    email: "john@test.com",
    password: "Secret123",
    role: "admin",
}

 function getLoginUrl(env: string): string {
    return `https://${env}.example.com/login`;
}

export {validUser, getLoginUrl};



