import { ApolloServer } from 'apollo-server-micro'
import { DateTimeResolver } from 'graphql-scalars'
import { NextApiHandler } from 'next'
import {
  arg,
  asNexusMethod,
  floatArg,
  makeSchema,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from 'nexus'
import path from 'path'
import cors from 'micro-cors'
import prisma from '../../lib/prisma'

export const GQLDate = asNexusMethod(DateTimeResolver, 'date')


const TripOffering = objectType({
  name: 'TripOffering',
  definition(t) {
    t.int('id')
    t.string('title')
    t.nullable.string('departureDate')
    t.nullable.string('arrivalDate')
    t.nullable.string('subtitle')
    t.float('price')
    t.nullable.string('pictureUrl')
  }
})

const TripCategory = objectType({
  name: 'TripCategory',
  definition(t) {
    t.int('id')
    t.string('name')
  }
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    // t.field('post', {
    //   type: 'Post',
    //   args: {
    //     postId: nonNull(stringArg()),
    //   },
    //   resolve: (_, args) => {
    //     return prisma.post.findUnique({
    //       where: { id: Number(args.postId) },
    //     })
    //   },
    // })

    // t.list.field('feed', {
    //   type: 'Post',
    //   resolve: (_parent, _args) => {
    //     return prisma.post.findMany({
    //       where: { published: true },
    //     })
    //   },
    // })

    t.list.field('categories', {
      type: 'TripCategory',
      resolve: (_parent, _args) => {
        return prisma.tripCategory.findMany({})
      },
    })

    // t.list.field('drafts', {
    //   type: 'Post',
    //   resolve: (_parent, _args, ctx) => {
    //     return prisma.post.findMany({
    //       where: { published: false },
    //     })
    //   },
    // })

    // t.list.field('filterPosts', {
    //   type: 'Post',
    //   args: {
    //     searchString: nullable(stringArg()),
    //   },
    //   resolve: (_, { searchString }, ctx) => {
    //     return prisma.post.findMany({
    //       where: {
    //         OR: [
    //           { title: { contains: searchString } },
    //           { content: { contains: searchString } },
    //         ],
    //       },
    //     })
    //   },
    // })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    // t.field('signupUser', {
    //   type: 'User',
    //   args: {
    //     name: stringArg(),
    //     email: nonNull(stringArg()),
    //   },
    //   resolve: (_, { name, email }, ctx) => {
    //     return prisma.user.create({
    //       data: {
    //         name,
    //         email,
    //       },
    //     })
    //   },
    // })

    // t.nullable.field('deletePost', {
    //   type: 'Post',
    //   args: {
    //     postId: stringArg(),
    //   },
    //   resolve: (_, { postId }, ctx) => {
    //     return prisma.post.delete({
    //       where: { id: Number(postId) },
    //     })
    //   },
    // })

    // t.field('createDraft', {
    //   type: 'Post',
    //   args: {
    //     title: nonNull(stringArg()),
    //     content: stringArg(),
    //     authorEmail: stringArg(),
    //   },
    //   resolve: (_, { title, content, authorEmail }, ctx) => {
    //     return prisma.post.create({
    //       data: {
    //         title,
    //         content,
    //         published: false,
    //         author: {
    //           connect: { email: authorEmail },
    //         },
    //       },
    //     })
    //   },
    // })

    // t.nullable.field('publish', {
    //   type: 'Post',
    //   args: {
    //     postId: stringArg(),
    //   },
    //   resolve: (_, { postId }, ctx) => {
    //     return prisma.post.update({
    //       where: { id: Number(postId) },
    //       data: { published: true },
    //     })
    //   },
    // })

    t.field('createTrip', {
      type: 'TripOffering',
      args: {
        title: nonNull(stringArg()),
        price: nonNull(floatArg()),
        departureDate: arg(),
        arrivalDate: stringArg(),
        subtitle: stringArg(),
        pictureUrl: stringArg(),
      },
      resolve: (_, { title, price, departureDate, arrivalDate, subtitle, pictureUrl }, ctx) => {
        return prisma.tripOffering.create({
          data: {
            title,
            price,
            departureDate,
            arrivalDate,
            subtitle,
            pictureUrl,
          },
        })
      },
    })
  },
})

export const schema = makeSchema({
  types: [
    Query,
    Mutation,
    TripOffering,
    TripCategory,
    GQLDate,
  ],
  outputs: {
    typegen: path.join(process.cwd(), 'generated/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated/schema.graphql'),
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

let apolloServerHandler: NextApiHandler

async function getApolloServerHandler() {
  const apolloServer = new ApolloServer({ schema })
  
  if (!apolloServerHandler) {
    await apolloServer.start()

    apolloServerHandler = apolloServer.createHandler({
      path: '/api',
    })
  }

  return apolloServerHandler
}

const handler: NextApiHandler = async (req, res) => {
  const apolloServerHandler = await getApolloServerHandler()

  if (req.method === 'OPTIONS') {
    res.end()
    return
  }

  return apolloServerHandler(req, res)
}

export default cors()(handler)
