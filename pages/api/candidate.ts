// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoProxy from 'ecologia/server/mongo.js'

type Data = {
  ok: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(404).end()
    return
  }
  await mongoProxy.waitFor

  await mongoProxy.candidates.insertOne(req.body)

  res.status(200).json({ ok: true })
}
