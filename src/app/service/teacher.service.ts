import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Teacher {
  _id?: any;
  nombre: string,
  code: string,
  apellido: string,
  email: string,
  telefono: string,
  status: boolean,
  creationDate: Date,
}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  url = "http://localhost:5000/api/teacher"
  constructor(private http: HttpClient) { }

  getTeacher(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.url);
  }

  addTeacher(teacher: any): Observable<Teacher> {
    return this.http.post<Teacher>(this.url, teacher);
  }
  editTeacher(teacher: any): Observable<Teacher> {
    return this.http.patch<Teacher>(this.url, teacher)
  }
  deleteTeacher(id: string): Observable<Teacher> {
    return this.http.delete<Teacher>(this.url + '/' + id);
  }
}
