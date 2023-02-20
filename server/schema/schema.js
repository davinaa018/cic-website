// Mongoose models
const User = require("../models/User");
const Event = require("../models/Event");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
} = require("graphql");

const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    dateOfEvent: { type: GraphQLString },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    fullName: { type: GraphQLString },
    email: { type: GraphQLString },
    schoolId: { type: GraphQLString },
    attendanceCount: {
      type: GraphQLInt,
      resolve: (user) => {
        return user.attendanceCount;
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    events: {
      type: new GraphQLList(EventType),
      resolve(parent, args) {
        return Event.find();
      },
    },
    event: {
      type: EventType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Event.findById(args.id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
  },
});

//  MUTATIONS
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // CREATE USER/UPDATES ATTENDANCE
    createUser: {
      type: UserType,
      args: {
        fullName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        schoolId: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const user = await User.findOne({ email: args.email });
        if (user) {
          // check if user has signed up within the last 24 hours
          const lastSignupTimestamp = user.lastSignupTimestamp;
          const nowTimestamp = Date.now();
          const hoursSinceLastSignup =
            (nowTimestamp - lastSignupTimestamp) / 3600000; // 3600000 ms = 1 hour
          if (hoursSinceLastSignup < 24) {
            throw new Error("You can only sign up once every 24 hours.");
          }
          // update user's last signup timestamp
          await User.updateOne(
            { _id: user._id },
            { $set: { lastSignupTimestamp: nowTimestamp } }
          );
          // increment attendance count
          await User.updateOne(
            { _id: user._id },
            { $inc: { attendanceCount: 1 } }
          );
          return user;
        }
        // create new user
        const newUser = await new User({
          fullName: args.fullName,
          email: args.email,
          schoolId: args.schoolId,
          attendanceCount: 1,
          lastSignupTimestamp: Date.now(),
        });
        return newUser.save();
      },
    },
    // ADD EVENT
    addEvent: {
      type: EventType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        dateOfEvent: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const event = new Event({
          name: args.name,
          description: args.description,
          dateOfEvent: args.dateOfEvent,
        });
        return event.save();
      },
    },
    // DELETE EVENT
    deleteEvent: {
      type: EventType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Event.findByIdAndRemove(args.id);
      },
    },
    // UPDATE EVENT
    updateEvent: {
      type: EventType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return Event.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
