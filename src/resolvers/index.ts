const resolver = {
  Query: {
    findPlace(_, { input }) {
      const place = {
        id: "1",
        lat: "Lat",
        long: "Long",
        name: "Bulgaria",
      };

      return { place };
    },
  },
};

export {
  resolver,
};
