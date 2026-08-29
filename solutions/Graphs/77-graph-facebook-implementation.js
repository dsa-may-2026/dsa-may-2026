class User {
  constructor(username) {
    this.username = username
  }
}


class Facebook {
  users = new Map()

  signUp(username) {
    if(this.users.has(username)) {
      return false
    }
    this.users.set(username, new Set());
    return true
  }

  deleteUser(uname) {
    if(!this.users.has(uname)) {
      return false
    }

    this.users.delete(uname)

    for(let key of this.users.keys()) {
      if(this.users.get(key).has(uname)) {
        this.users.get(key).delete(uname)
      }
    }
  }

  addFriend(uname1, uname2) {
    if(!this.users.has(uname1) ||
    !this.users.has(uname2)) {
      return false
    }

    if(this.users.get(uname1).has(uname2)) {
      return false
    }

    this.users.get(uname1).add(uname2)
    this.users.get(uname2).add(uname1)

    return true
  }

  removeFriend(uname1, uname2) {
    if(!this.users.has(uname1) ||
    !this.users.has(uname2)) {
      return false
    }

    if(!this.users.get(uname1).has(uname2)) {
      return false
    }

    this.users.get(uname1).delete(uname2)
    this.users.get(uname2).delete(uname1)

    return true
  }
}

let fb = new Facebook()
fb.signUp("venky")
fb.signUp("phan")
fb.signUp("sus")

fb.addFriend("venky", "mark")
fb.addFriend("venky", "phan")
fb.deleteUser("zuck")
fb.deleteUser("venky")