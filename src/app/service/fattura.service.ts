import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FatturaService {

  constructor(private http: HttpClient) { }

  getAll(p: number) {
    return this.http.get(
      `${environment.pathApi}/api/fatture?page=${p}&size=20&sort=id,ASC`
    );
  }

  dettagli(id: number) {
    return this.http.get(`${environment.pathApi}/api/fatture/${id}`);
  }

  modifica(data: any) {
    return this.http.put(`${environment.pathApi}/api/fatture/${data.id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${environment.pathApi}/api/fatture/${id}`);
  }

  creaFattura(data: any) {
    return this.http.post(`${environment.pathApi}/api/fatture`, data);
  }
}
