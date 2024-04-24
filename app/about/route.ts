import { comments } from '@/data/comments';

export const GET = async () => {
    return Response.json(comments);
};

export const POST = async (request: Request) => {
    const { text } = await request.json();
    const newComment = {
        id: comments.length + 1,
        text,
    };

    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    });
};
