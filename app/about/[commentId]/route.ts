import { comments } from '@/data/comments';

type Props = {
    params: {
        commentId: string;
    };
};

export const GET = (_request: Request, { params }: Props) => {
    const currentComment = comments.filter(({ id }) => id === +params.commentId)[0];

    return Response.json(currentComment);
};

export const PATCH = async (request: Request, { params }: Props) => {
    const { text } = await request.json();
    const index = comments.findIndex(({ id }) => id === +params.commentId);

    comments[index].text = text;
    return Response.json(comments[index]);
};
