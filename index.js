const cheerio = require('cheerio');
const axios = require('axios');

const findInfo = (pkg, r) => {
    const $ = cheerio.load(r.data);
    const badgeHtml = $('.badge-only').html();
    const description = $('#readme').find('p')
        .map((i, el) => $(el).text().trim()).get()
        .filter(t => t.length);
    pkg.badge = badgeHtml;
    pkg.description = description;
    return pkg;
}

module.exports = (username, destination) =>
    axios.get('https://www.npmjs.com/~' + username)
        .then(
        r => {
            const $ = cheerio.load(r.data);
            const baseUrl = 'https://www.npmjs.com'
            const packages = $('.collaborated-packages').find('a')
                .map((li, el) => ({
                    url: baseUrl + el.attribs.href,
                    name: el.attribs.href.replace('/package/', '')
                })
                ).get();
            const findPackages = packages.map(pkg => axios.get(pkg.url).then(findInfo.bind(null, pkg)));
            return Promise.all(findPackages);
        })
        .then((packages) => {

            if (typeof destination === 'string') {
                const fs = require('fs');
                return fs.writeFileSync(destination, JSON.stringify(packages, null, 2))
            }
            
            return packages
        });