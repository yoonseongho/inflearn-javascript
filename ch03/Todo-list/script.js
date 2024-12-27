const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const savedTodoList = JSON.parse(localStorage.getItem("save-items"));

const createTodo = (storageData) => {
    let todoContents = todoInput.value;

    if (storageData) {
        todoContents = storageData.contents;
    }

    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    newBtn.addEventListener("click", () => {
        newLi.classList.toggle("complete");
        saveItemsFn();
    });

    newLi.addEventListener("dblclick", () => {
        newLi.remove();
        saveItemsFn();
    });

    if (storageData?.complete) {
        newLi.classList.add("complete");
    }

    newSpan.textContent = todoContents;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value = "";
    saveItemsFn();
};

const keyCodeCheck = () => {
    if (window.event.keyCode === 13 && todoInput.value.trim() !== '') {
        createTodo();
    }
};

const deleteAll = () => {
    const liList = document.querySelectorAll("li");

    for (let i = 0; i < liList.length; i++) {
        liList[i].remove();
    }

    saveItemsFn();
};

const saveItemsFn = () => {
    const saveItems = [];
    for (let i = 0; i < todoList.children.length; i++) {
        const todoObj = {
            contents: todoList.children[i].querySelector("span").textContent,
            complete: todoList.children[i].classList.contains("complete"),
        };
        saveItems.push(todoObj);
    }

    saveItems.length === 0
        ? localStorage.removeItem("save-items")
        : localStorage.setItem("save-items", JSON.stringify(saveItems));
};

if (savedTodoList) {
    for (let i = 0; i < savedTodoList.length; i++) {
        createTodo(savedTodoList[i]);
    }
}

const weatherSearch = (postion) => {
    console.log(postion.latitde);
    const openweatherRes = fetch(
        `https://api.openweathermap.org/data/3.0/weather?lat=${postion.latitde}&lon=${postion.longitude}&appid=e744c6ee7a207f24fbbdd0eda5f21b25`
    ).then((res) => {
        // console.log(res.json());
        return res.json();
    }).then((json) => {
        console.log(json.name, json.weather[0].description);
    })
    .catch((err) => {
      console.error(err);
    });
};

const accessToGeo = (postion) => {
    const postionObj = {
        latitde: postion.coords.latitde,
        longitude: postion.coords.longitude,
    };

    weatherSearch(postionObj);
};

const askForLocation = () => {
    navigator.geolocation.getCurrentPosition(
        accessToGeo,
        (err) => {
            console.log(err);
        });
};
askForLocation();

// const promiseTest = () => {
//     return new Promise((resolver, reject) => {
//         resolver(100);
//         // reject('error');
//     });
// };
// promiseTest().then((res) => {
//     console.log(res);

// });
