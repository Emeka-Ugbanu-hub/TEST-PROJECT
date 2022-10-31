const NewPost = () => {
  return (
    <>
      <div className="block p-6  bg-white w-full mt-4 rounded-lg border shadow-md hover:bg-white dark:bg-white0 dark:hover:bg-white">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">
          New Post
        </h5>
        <input
          type="text"
          name="serch"
          placeholder="What are you posting today, James?"
          className="px-4 bg-white w-full h-8 rounded-l-2xl bg-gray-200 rounded-r-2xl text-sm focus:outline-none"
        />
      </div>
    </>
  );
};

export default NewPost;
