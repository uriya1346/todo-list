import { addTask, removeAllTasks } from "./tasksManger.js";

export const declareEvents = () => {
  let add_btn = document.querySelector("#add_btn");
  let reset_btn = document.querySelector("#reset_btn");

  add_btn.addEventListener("click", () => {
    let taskItem = {
      name: document.querySelector("#id_name").value,
      time: document.querySelector("#id_time").value,
      // Date.now() -> מחזיר זמן יוניקס ייחודי
      // id -> מאפיין שיעזור במהשך למחיקה ספציפית של רשומה של משימה
      id:Date.now()
    }
    // console.log(taskItem)
    addTask(taskItem)
  })

  reset_btn.addEventListener("click", () => {
    if(confirm("Are you sure you want Delete all?"))
    {
      removeAllTasks();
    }
  })
}