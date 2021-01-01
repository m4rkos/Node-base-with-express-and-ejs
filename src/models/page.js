function apiModel(conn){ this._conn = conn; }

apiModel.prototype.getAllTables = function(data_query, callback){
    let query_sql = `select * from english`;    
    this._conn.query(query_sql, callback);    
}

apiModel.prototype.getPost = function(data_query, callback){
    let sql_query = '';
    if(data_query != null){
        sql_query = `where id_content = ${data_query.id}`;
    }
    this._conn.query(`select * from blog_sys_post ${sql_query} order by id_content desc`, callback);
}
apiModel.prototype.removePost = function(data_query, callback){
    let id = 0;
    if(data_query != null){
        id = data_query.id;
    }
    this._conn.query(`delete from blog_sys_post where id_content = ${id}`, callback)
}

// User
apiModel.prototype.saveUser = function(content, callback){
    console.log(content);
    this._conn.query('insert into blog_sys_user set ? ', content, callback);
}
apiModel.prototype.getUser = function( content, callback){
    this._conn.query( `select token, fullname, resume, email, phone, image from blog_sys_user where email = '${content.email}' and password = '${content.pass}' `, callback);
}


apiModel.prototype.savePermition = function(content, callback){
    console.log(content);
    this._conn.query('insert into blog_sys_user set ? ', content, callback);
}
apiModel.prototype.saveSetting = function(content, callback){
    console.log(content);
    this._conn.query('insert into blog_sys_user set ? ', content, callback);
}
apiModel.prototype.savePage = function(content, callback){
    console.log(content);
    this._conn.query('insert into blog_sys_user set ? ', content, callback);
}
apiModel.prototype.savePost = function(content, callback){
    console.log(content);
    this._conn.query('insert into blog_sys_post set ? ', content, callback);
}
apiModel.prototype.saveUserAccess = function(content, callback){
    console.log(content);
    this._conn.query('insert into blog_sys_user set ? ', content, callback);
}

module.exports = function(){
    return apiModel;
}
