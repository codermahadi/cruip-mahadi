import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient();

// POST /api/singup
// Required fields in body: title, titleSlug, orderingNumber, published
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const httpMethod = req.method;
    const {id: userId} = req.query;
    const {fullName, email, password, profession, dateOfBirth, id} = req.body;
    switch (httpMethod) {
        case 'GET':
            res.status(200).json(1);
            break;
        case 'POST':
            const item = await prisma.user.create({
                data: {
                    fullName: fullName,
                    email: email,
                    password: password,
                    profession: profession,
                    dateOfBirth: dateOfBirth
                },
            });
            res.status(201).json(item);
            break;
        case 'PUT':
            const categoryUpdate = await prisma.user.update({
                where: {
                    id: id,
                },
                data: {
                    fullName: fullName,
                    email: email,
                    password: password,
                    profession: profession,
                    dateOfBirth: dateOfBirth
                },
            }).then(r => console.log(r)).catch(er => console.log(er));
            res.status(201).json(categoryUpdate);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${httpMethod} not allowed`);
    }
}
