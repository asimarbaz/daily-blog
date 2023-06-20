import useFetch from "./useFetch";

const Users = () => {
    const {data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    let setBlogs, setAuthors
    if(!isPending){
        setBlogs = new Set(blogs?.map((blog) => {return blog.author}))
        setAuthors = Array.from(setBlogs)
    }

    return (
        <div className="users">
            <h2 style={{margin:"20px"}}>User details</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {!isPending && <ul>
                {setAuthors.map((author, i) => {
                    return <li key={i}>{ author }</li>
                })}
            </ul>}
        </div>
    );
}
 
export default Users;
