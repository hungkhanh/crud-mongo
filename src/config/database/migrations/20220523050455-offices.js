module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.createCollection('offices', {
      employeeId: 'objectId',
      lastName: 'string',
      firstName: 'string',
      extension: 'string',
      email: 'string',
      officeCode: 'objectId',
      reportsTo: 'objectId',
      jobTitle: 'string',
    });
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    db.collection.drop('offices');
  },
};
