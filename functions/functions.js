export function backendURL () {
    // return 'http://127.0.0.1:8000'
    return 'http://headlessbackend.brackets-tech.com'
}

export function graphQLUrl (image) {
    return `${backendURL()}/graphql`
}