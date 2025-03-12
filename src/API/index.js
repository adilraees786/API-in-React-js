export  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
    });
    
    return  await response.json();
}



//1nd Api Random Ursers

export const getRandomUsers = async() => {

    const response = await fetch("https://randomuser.me/api/", {
        method: "GET",
    });
    return await response.json();
   

}