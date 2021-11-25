let input = prompt("Welcome to your to do list, what would you like to do?")
const todos = ["kick Matt", "leave"];
while(input!=="quit" && input !== "q"){
    if(input === "list"){
        console.log("********")
        for(let i = 0; i< todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("********")
    } else if(input === "new"){
        const newTodo = prompt("Ok, what is new to do?");
        todos.push(newTodo);
        console.log(`${newTodo} added to list`)
    } else if(input === "delete"){
        const index = prompt("ok, enter an INDEX you want to delete");
        parseInt(index);
        let deleted =  todos.splice(index,1);
        console.log(`ok, deleted ${deleted}`);
    }
    input = prompt("what would you like to do?")
}
console.log("Ok QUIT THE APP")