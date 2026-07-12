type Credentials = {
    username: string;
    password: string;
}

const standartUser: Credentials = {
    username: 'standard_user',
    password: 'secret_sauce',
}

const lockedUser: Credentials = {
    username: 'locked_out_user',
    password: 'secret_sauce'
}

const userWithWrongPassword: Credentials = {
    username: 'standard_user',
    password: 'wrong_password',
}

const userWithEmptyUserName: Credentials = {
    username: '',
    password: 'secret_sauce',
}

export { standartUser, lockedUser, userWithWrongPassword, userWithEmptyUserName }