"use client";
import React, { useState, useEffect } from "react";
import { Todo } from "../Models/Todo";
import TodoItem from "./TodoItem";
import Todos from "./Todos";
import TodoAdd from "./TodoAdd";
type Props = {
    filter: string;
};

export default function TodoList({ filter }: Props) {
    const [todos, setTodos] = useState(() => readLocalStorageTodos());

    const filteredTodos = filter === "all" ? todos : todos.filter((todo) => todo.status !== filter);

    useEffect(() => {
        if (typeof todos !== "undefined") {
            setLocalStorageTodos(todos);
        }
    }, [todos]);

    const handleUpdateTodo = (updateTodo: Todo) => {
        if (updateTodo) {
            setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === updateTodo.id ? updateTodo : todo)));
        }
    };

    const handleDeleteTodo = (deleteTodo: Todo) => {
        if (deleteTodo) {
            setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== deleteTodo.id));
        }
    };

    const handleAddTodo = (addTodo: Todo) => {
        if (addTodo) {
            setTodos((prevTodo) => [...prevTodo, addTodo]);
        }
    };

    return (
        <>
            <section className="container">
                <ul className="list">
                    {filteredTodos?.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onUpdate={handleUpdateTodo} onDelete={handleDeleteTodo} />
                    ))}
                </ul>
            </section>
            <TodoAdd onAdd={handleAddTodo} />
        </>
    );
}

const readLocalStorageTodos = (): Todo[] => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos && typeof localTodos !== "undefined") {
        return JSON.parse(localTodos);
    }

    return [];
};

const setLocalStorageTodos = (todos: Todo[]) => {
    if (todos) {
        console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
};
