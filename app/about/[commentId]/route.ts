import { comments } from '@/data/comments';
import { redirect } from 'next/navigation';

type Props = {
    params: {
        commentId: string;
    };
};

export const GET = (_request: Request, { params }: Props) => {
    const currentComment = comments.filter(({ id }) => id === +params.commentId)[0];

    +params.commentId > comments.length && redirect('/about');
    return Response.json(currentComment);
};

export const PATCH = async (request: Request, { params }: Props) => {
    const { text } = await request.json();
    const index = comments.findIndex(({ id }) => id === +params.commentId);

    comments[index].text = text;
    return Response.json(comments[index]);
};

export const DELETE = async (_request: Request, { params }: Props) => {
    const index = comments.findIndex(({ id }) => id === +params.commentId);
    const deletedComment = comments[index];

    comments.splice(index, 1);
    return Response.json(deletedComment);
};
