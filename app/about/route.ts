import { comments } from '@/data/comments';

export const GET = async () => {
    return Response.json(comments);
};
