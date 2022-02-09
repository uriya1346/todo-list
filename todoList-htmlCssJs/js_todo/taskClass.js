import { removeSingleTask } from "./tasksManger.js";

class Task {
  constructor(_parent,_item){
    this.parent = _parent;
    this.name = _item.name;
    this.time = _item.time;
    this.id = _item.id;
  }

  render(){
    let div = document.createElement("div");
    div.className = "border my-2 p-2";
    document.querySelector(this.parent).append(div);

    div.innerHTML = `
    <button class="float-end mb-1 hero-btn">X</button>
    <h5>${this.name} - ${this.time}</h5>
    `
    let btn = div.querySelector("button");
    btn.addEventListener("click", () => {
      removeSingleTask(this.id)
    })
  }
}

export default Task;