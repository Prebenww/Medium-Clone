// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {sanityClient} from "../../sanity";


const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
}

// @ts-ignore
const client = sanityClient(config);

type Data = {
    name: string
}

export default async function createComment(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const {_id, name, email, comment} = JSON.parse(req.body);

    try {
        await client.create({
            _type: "comment",
            post: {
                _type: "reference",
                _ref: _id
            },
            name,
            email,
            comment
        })
    } catch (err){
        // @ts-ignore
        return res.status(500).json({ message: "Couldent submit comment", err})
    }

    // @ts-ignore
    res.status(200).json({ message: 'John Doe' })
}
