import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = '4ee78bdcf66ce11a59e5';
    private client_secret = 'f6801398000fc31ba93562703d24f2c7d28732a0';
    constructor(private _http: Http)
    {
        console.log('GithubService Ready...');
        this.username = 'gsingh737';
    }
    getUser(){
       return this._http.get('http://api.github.com/users/'+this.username+ '?client_id='+this.client_id + '&client_secret=' + this.client_secret).map(res=>res.json());
    }
    getRepos(){
       return this._http.get('http://api.github.com/users/'+this.username+ '/repos?client_id='+this.client_id + '&client_secret=' + this.client_secret).map(res=>res.json());
    }
    updateuser(username:string)
    {
        this.username = username;
    }

}
