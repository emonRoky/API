document.getElementById("btn-submit").addEventListener('click',function(){
    const title = document.getElementById("title").value;
    const dece = document.getElementById("dece").value;
    const post ={ title:title , body:dece};
    nowPostToServer(post)
})


function nowPostToServer(postInfo){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => alert("please try again later"));
}