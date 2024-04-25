import { comments } from '@/data/comments';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    const filteredComments = query
        ? comments.filter(({ text }) => text.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        : comments;

    return Response.json(filteredComments);
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
