const settings = {
    dev: {
        apiUrl: "http://192.168.1.17/api"
    },
    prod: {
        apiUrl: "https://api.carstory.mdomzalski.pl"
    }
}

const getCurrentSettings = () => {
    if(__DEV__) return settings.dev
    return settings.prod;
}

export default getCurrentSettings();