const GhostAdminApi = require('@tryghost/admin-api');

(async function main() {
    try {
        const api = new GhostAdminApi({
            url: process.env.url,
            key: process.env.key,
            version: 'canary'
        });

        // Deploy it to the configured site
        await api.themes.upload({
            file: process.env.file
        });
        console.log('Theme successfully uploaded.');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}());

