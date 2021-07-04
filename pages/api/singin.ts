import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient();

// POST /api/singin
// Required fields in body: email, password
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const httpMethod = req.method;
    const {email, password} = req.body;
    switch (httpMethod) {
        case 'POST':
            const item = await prisma.user.findFirst({
                where: {
                    email: email,
                    password: password,
                },
            });
            res.status(201).json(item);
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${httpMethod} not allowed`);
    }
}
