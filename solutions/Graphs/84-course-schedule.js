
var canFinish = function (numCourses, prerequisites) {
    let map = {}

    for (let i = 0; i < numCourses; i++) {
        map[i] = new Set()
    }

    for (let pre of prerequisites) {
        let [dependent, dependency] = pre
        map[dependent].add(dependency)
    }

    let queue = []

    for (let key in map) {
        if (map[key].size == 0) {
            queue.push(key)
            delete map[key]
        }
    }

    while (queue.length) {
        let independentCourse = queue.shift();
        for (let key in map) {
            if (map[key].has(+independentCourse)) {
                map[key].delete(+independentCourse)
                if (map[key].size == 0) {
                    queue.push(key)
                    delete map[key]
                }
            }
        }
    }

    if (Object.keys(map).length > 0) {
        return false
    }

    return true

}