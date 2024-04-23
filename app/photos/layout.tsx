type Props = {
    children: React.ReactNode;
    modal: React.ReactNode;
};

const PhotosLayout: React.FC<Props> = ({ children, modal }) => {
    return (
        <>
            {modal}
            {children}
        </>
    );
};

export default PhotosLayout;
