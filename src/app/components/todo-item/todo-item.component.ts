import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo : EventEmitter<Todo>  = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  //set dynamic class binding
  setClasses(){
  let classes = {
    todo:true,
    'is-complete':this.todo.completed
  }
  return classes;
}

onToggle(todo){
  //Toggle on UI
 todo.completed= !todo.completed;
 //Toggle on Server
 this.todoService.toggleCompleted(todo).subscribe(todo => {
   console.log(todo);
 })

}
onClick(todo){
  this.deleteTodo.emit(todo);
}

}
