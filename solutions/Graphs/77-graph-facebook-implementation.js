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

  bfs(uname) {
    let res = []

    let queue = [uname]

    let visited = new Set()

    while(queue.length) {
      let levelSize = queue.length
      let levelRes = []
      while(levelSize--) {
        let item = queue.shift()
        visited.add(item)
        levelRes.push(item)
        for(let nextItem of this.users.get(item)) {
          if(!visited.has(nextItem)) {
            queue.push(nextItem)
          }
        }
      }
      res.push(levelRes)
    }
    return res
  }

  dfs(uname) {
    let res = []
    let visited = new Set()
    
    function helper(uname) {
      res.push(uname)
      visited.add(uname)
      for(let nextItem of this.users.get(uname)) {
        if(!visited.has(nextItem)) {
          helper.call(this, nextItem)
        }
      }
    }

    helper.call(this,uname)
    return res
  }
  
}

let fb = new Facebook()
fb.signUp("A")
fb.signUp("N")
fb.signUp("K")
fb.signUp("M")
fb.signUp("B")
fb.signUp("O")
fb.signUp("P")
fb.signUp("L")
fb.signUp("C")
fb.signUp("D")

fb.addFriend("A", "B")
fb.addFriend("A", "K")
fb.addFriend("A", "M")
fb.addFriend("A", "N")
fb.addFriend("A", "O")
fb.addFriend("O", "P")
fb.addFriend("K", "L")
fb.addFriend("B", "C")
fb.addFriend("C", "D")

fb.dfs("A")
