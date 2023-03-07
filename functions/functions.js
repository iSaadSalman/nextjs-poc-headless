export function backendURL () {
    // return 'http://127.0.0.1:8000'
    return 'https://fa77-31-166-34-44.in.ngrok.io'
}

export function graphQLUrl (image) {
    return `${backendURL()}/graphql`
}