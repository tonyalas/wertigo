export function makeFriendlyURL(defaultURL) {
    return defaultURL.replace(/[^a-zA-Z0-9-_]/g, '');
}
