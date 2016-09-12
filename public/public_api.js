var sheep = {
  user: {},
  dontSleep: function(obj) {
    user = obj;
  },

  post: function(dbName, colName, data, cb) {
    const url = user.url + user.id + '/' + dbName + '/' + colName;
    const httpReq = new XMLHttpRequest();
    httpReq.open('POST', url, true);
    httpReq.setRequestHeader('Content-Type', 'application/json');
    httpReq.setRequestHeader('Authorization', user.authKey);
    httpReq.onreadystatechange = function() {
      if (httpReq.readyState === XMLHttpRequest.DONE) {
        if (httpReq.status === 200) cb(null, httpReq.responseText);
        else cb(httpReq.status, null);
      }
    }
    httpReq.send(JSON.stringify(data));
  },

  get: function(dbName, colName, cb) {
    const url = user.url + user.id + '/' + dbName + '/' + colName;
    const httpReq = new XMLHttpRequest();
    httpReq.open('GET', url, true);
    httpReq.setRequestHeader('Authorization', user.authKey);
    httpReq.onreadystatechange = function() {
      if (httpReq.readyState === XMLHttpRequest.DONE) {
        if (httpReq.status === 200) cb(null, JSON.parse(httpReq.responseText));
        else cb('Mucha problemas!!', null);
      }
    }
    httpReq.send();
  },

  put: function(dbName, colName, query, data, cb) {
    const key = Object.keys(query)[0];
    const value = query[key];
    const url = user.url + user.id + '/' + dbName + '/' + colName + '/?' + key + '=' + value;
    const httpReq = new XMLHttpRequest();
    httpReq.open('PUT', url, true);
    httpReq.setRequestHeader('Authorization', user.authKey);
    httpReq.onreadystatechange = function() {
      if (httpReq.readyState === XMLHttpRequest.DONE) {
        if (httpReq.status === 200) cb(null, httpReq.responseText);
        else cb('Error encountered during PUT', null);
      }
    }
    httpReq.send();
  },

  delete: function(dbName, colName, query, cb) {
    const key = Object.keys(query)[0];
    const value = query[key];
    const url = user.url + user.id + '/' + dbName + '/' + colName + '/?' + key + '=' + value;
    const httpReq = new XMLHttpRequest();
    httpReq.open('PUT', url, true);
    httpReq.setRequestHeader('Authorization', user.authKey);
    httpReq.onreadystatechange = function() {
      if (httpReq.readyState === XMLHttpRequest.DONE) {
        if (httpReq.status === 200) cb(null, httpReq.responseText);
        else cb('Error encountered during DELETE', null);
      }
    }
    httpReq.send();
  }
}

