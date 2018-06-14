export default function processTemplate(htmlString, data) {
    return getMatches(htmlString, /{(.+?)}/gm)
        .reduce((prev, curr) => {
            const dataItem = data[curr[1]];
            return dataItem ? prev.replace(curr[0], dataItem) : prev;
        }, htmlString);
}

function getMatches(htmlString, regexp) {
    let match = null;
    const result = [];
    while ((match = regexp.exec(htmlString))) {
        result.push(match);
    }
    return result;
}
