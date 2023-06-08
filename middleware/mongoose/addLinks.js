export default (schema, field, basePath) => {
  schema.post("find", function (docs) {
    for (let doc of docs) {
      doc._doc[`${field}Link`] = doc.fields[field].map(
        (id) => `http://localhost:3000/api/${basePath}/${id}`
      );
    }
  });

  schema.virtual(`${field}Link`).get(function () {
    return this.fields[field].map(
      (id) => `http://localhost:3000/api/${basePath}/${id}`
    );
  });
};
