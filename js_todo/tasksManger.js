import Task from "./taskClass.js";
// single source of truth
// מקור אחד של האמת של כל רשימת המשימות
const tasks_ar = [];

export const checkLocal = () => {
  // בודק אם יש לוקאל של טאסקס ושולף אותו לתוך המערך
  // TASKS_AR ומדפיס אותו
  if(localStorage["tasks"]){
    tasks_ar.push(...JSON.parse(localStorage["tasks"]));
    createTasks(tasks_ar)
  }
}


// VIEWEVENTS.JS נקרא מכפתור אד טאסק ב
export const addTask = (_taskItem) => {
  tasks_ar.push(_taskItem);
  createTasks(tasks_ar)
}
// VIEWEVENTS.JS נקרא מכפתור ריסט ב
export const removeAllTasks = () => {
  tasks_ar.splice(0 , tasks_ar.length)
  createTasks(tasks_ar)
}

// פונקציה שנקראת מהכפתורים של הקלאס
export const removeSingleTask = (_idDel) => {
  tasks_ar.forEach((item,i ) => {
    if(item.id == _idDel){
      tasks_ar.splice(i , 1);
    }
  })
  createTasks(tasks_ar)
}


export const createTasks = (_tasks_ar) => {
  // לרוקן את ההורה
  document.querySelector("#id_list").innerHTML = "";
  // בחרנו לבצע את המיון דווקא כאן
  // כי כל הפונקציות של הוספה/החסרה,בדיקת לוקאל
  // בסוף יקראו לפונקציה הזאתי
  let sort_ar = _.sortBy(_tasks_ar, "time");
  sort_ar.forEach(item => {
    let task = new Task("#id_list", item);
    task.render()
  })
  // לאחר הדפסה של המשימות
  // ישמרו בלוקאל
  saveLocal(sort_ar);
}


const saveLocal = (_ar) => {
  // שמירה בלוקאל בקיי טאסקס
  localStorage.setItem("tasks", JSON.stringify(_ar));
}