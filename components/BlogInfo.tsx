const BlogInfo = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <section>
            <h1 className='text-xl'>Blog Info</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima ducimus sit suscipit sapiente,
                maxime, sequi, incidunt aspernatur nihil corporis minus eum quisquam nobis modi nemo alias. Totam, enim
                facere!
            </p>
        </section>
    );
};

export default BlogInfo;
