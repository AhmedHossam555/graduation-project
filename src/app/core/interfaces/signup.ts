export interface Signup {
    email: string,
    password: string,
    username: string,
    tenant :{
        name ?: string,
        description ?: string,
        logo ?: string
    }
}
