
const poster = function () {
    const posts = [
        { name: "Abby", text: "Am I doing this right??" },
        { name: "Jen", text: "Hello" }
    ]
    
    const addPost = function(){
        posts.push({
            name: $("#name").val(),
            text: $("#text").val()
        })
    }
    return{
        posts: posts,
        new: addPost
    }
}
const Poster = poster()

const render = function (posts) {
    $("#posts").empty()
    for (let post of posts) {
        const newComment = `<div> ${post.name}, ${post.text}</div>`
        $("#posts").append(newComment)
    }
}
$("button").on("click", function () {
    Poster.new()
    render(Poster.posts)
    // render(poster.posts)
})
