import parseSync from 'csv-parse/lib/sync';

export function csvParseSync (data) {
    return parseSync(data, { columns: true });
}