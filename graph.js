// A graph is a non-linear data structure that consists of a set of nodes called vertices and connections between them called edges.
// It is used to represent relationships or connections between different data elements.
// Graphs are widely used to model networks, paths, and linked data.

// **Breadth First Search (BFS)** is a graph traversal technique that explores all the neighboring nodes first before moving to the next level.
// It visits nodes level by level starting from a given source node.
                                                                            
// **Depth First Search (DFS)** is a graph traversal technique that explores a node as deep as possible before backtracking.
// It follows one path completely before moving to another path.


class Graph{
    constructor(){
        this.obj={}
    }
    addEle(v1,v2){
        if(!this.obj[v1])this.obj[v1]=[]
        if(!this.obj[v2])this.obj[v2]=[]
        this.obj[v1].push(v2)
        this.obj[v2].push(v1)
    }
    print(){
        console.log(this.obj)
    }
    bfs(start){
        let queue=[]
        let result=[]
        let visited=[]
        queue.push(start)
        visited.push(start)
        while(queue.length){
            let current=queue.shift()
            result.push(current)
            this.obj[current].forEach((ele)=>{
                if(!visited.includes(ele)){
                    queue.push(ele)
                    visited.push(ele)
                }
            })
        }
        return result
    }
    dfs(start){
        let stack=[]
        let result=[]
        let visited=[]
        stack.push(start)
        visited.push(start)
        while(stack.length){
            let current=stack.pop()
            result.push(current)
            this.obj[current].forEach((ele)=>{
                if(!visited.includes(ele)){
                    stack.push(ele)
                    visited.push(ele)
                }
            })
        }
        return result
    }
}
let graph=new Graph()
graph.addEle(1,2)
graph.addEle(2,4)
graph.addEle(1,3)
graph.addEle(4,5)
graph.addEle(1,5)
graph.print()
console.log(graph.bfs(1))
console.log(graph.dfs(1))









// adjacency Matrix

let n=5
let adjMatrix=Array.from({length:n},()=>Array(n).fill(0))
adjMatrix[0][1]=1
console.log(adjMatrix)


