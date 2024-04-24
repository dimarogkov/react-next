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
