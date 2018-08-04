export default function lastModifiedPlugin(schema) {
    schema.add({ creationDate: Date });
    schema.add({ lastModifiedDate: Date });

    schema.pre('save', function (next) {
        const date = new Date();
        this.creationDate = date;
        this.lastModifiedDate = date;
        next();
    });

    schema.pre('update', function (next) {
        const updatings = { lastModifiedDate: new Date() };
        this.update({}, updatings);
        next();
    });

    schema.path('lastModifiedDate').index(true);
} 